import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import { PROMPTS } from '../prompts/templates';
import { improvePromptWithAI, getAdditionalFieldsForPrompt } from '../utils/openai';
import { Copy, CheckCircle, Terminal, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

export const DynamicPromptComposer = ({ templateKey }) => {
    const { businessData } = useBusiness();
    const [copied, setCopied] = useState(false);
    const [isImproving, setIsImproving] = useState(false);
    const [improvedPrompt, setImprovedPrompt] = useState(null);
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    const [additionalData, setAdditionalData] = useState({});
    const [error, setError] = useState(null);

    const additionalFields = getAdditionalFieldsForPrompt(templateKey);

    const getProcessedPrompt = (useImproved = false) => {
        let text = useImproved && improvedPrompt ? improvedPrompt : (PROMPTS[templateKey] || '');
        const variables = text.match(/{{(.*?)}}/g) || [];

        variables.forEach(v => {
            const key = v.replace(/{{|}}/g, '').trim();
            const rawValue = businessData[key];
            const value = Array.isArray(rawValue) ? rawValue.join(', ') : rawValue;

            const replacement = value ?
                `<span class="text-primary font-bold drop-shadow-[0_0_8px_var(--primary-glow)]">${value}</span>` :
                `<span class="text-accent font-bold animate-pulse">[MISSING: ${key}]</span>`;
            text = text.replace(v, replacement);
        });

        return text;
    };

    const getRawPrompt = (useImproved = false) => {
        let text = useImproved && improvedPrompt ? improvedPrompt : (PROMPTS[templateKey] || '');
        const variables = text.match(/{{(.*?)}}/g) || [];

        variables.forEach(v => {
            const key = v.replace(/{{|}}/g, '').trim();
            const rawValue = businessData[key];
            const value = Array.isArray(rawValue) ? rawValue.join(', ') : rawValue;

            text = text.replace(v, value || `[${key.toUpperCase()}]`);
        });

        return text;
    };

    const handleImproveWithAI = async () => {
        setIsImproving(true);
        setError(null);

        try {
            const basePrompt = getRawPrompt();
            const improved = await improvePromptWithAI(basePrompt, additionalData);
            setImprovedPrompt(improved);
        } catch (err) {
            setError(err.message);
            console.error('Error:', err);
        } finally {
            setIsImproving(false);
        }
    };

    const copyToClipboard = () => {
        const text = getRawPrompt(!!improvedPrompt);
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleAdditionalDataChange = (key, value) => {
        setAdditionalData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center bg-white-5 p-4 rounded-2xl border border-white-5">
                <div className="flex items-center gap-3">
                    <Terminal size={18} className="text-dim" />
                    <span className="text-xs font-bold text-dim uppercase tracking-widest">{templateKey}</span>
                    {improvedPrompt && (
                        <span className="text-xs bg-primary-10 text-primary px-3 py-1 rounded-full flex items-center gap-1">
                            <Sparkles size={12} />
                            Mejorado con AI
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    {additionalFields.length > 0 && (
                        <button
                            onClick={() => setShowAdditionalFields(!showAdditionalFields)}
                            className="btn-secondary py-2 px-4 text-xs flex items-center gap-2"
                        >
                            {showAdditionalFields ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            Datos Adicionales
                        </button>
                    )}
                    <button
                        onClick={copyToClipboard}
                        className={clsx(
                            "btn-primary py-2 px-6 text-xs transition-all duration-300",
                            copied ? "bg-success shadow-[0_0_20px_rgba(16,185,129,0.4)]" : "bg-white-10 text-white hover-bg-primary"
                        )}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={copied ? 'copied' : 'copy'}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center gap-2"
                            >
                                {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
                                {copied ? "Copiado" : "Copiar a Manus"}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Campos adicionales colapsables */}
            <AnimatePresence>
                {showAdditionalFields && additionalFields.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-white-5 p-6 rounded-2xl border border-white-5 space-y-4"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-sm font-bold text-white">Añade tu información</h4>
                            <button
                                onClick={handleImproveWithAI}
                                disabled={isImproving || Object.keys(additionalData).length === 0}
                                className={clsx(
                                    "btn-primary py-2 px-4 text-xs flex items-center gap-2",
                                    (isImproving || Object.keys(additionalData).length === 0) && "opacity-50 cursor-not-allowed"
                                )}
                            >
                                <Sparkles size={14} className={isImproving ? "animate-spin" : ""} />
                                {isImproving ? "Mejorando..." : "Mejorar con AI"}
                            </button>
                        </div>

                        {additionalFields.map(field => (
                            <div key={field.key} className="space-y-2">
                                <label className="text-xs font-bold text-muted block">
                                    {field.label}
                                </label>
                                {field.multiline ? (
                                    <textarea
                                        value={additionalData[field.key] || ''}
                                        onChange={(e) => handleAdditionalDataChange(field.key, e.target.value)}
                                        placeholder={field.placeholder}
                                        className="w-full bg-bg-dark text-white border border-white-10 rounded-xl p-4 text-sm font-mono placeholder-dim focus:outline-none focus:border-primary transition-colors resize-none"
                                        rows={6}
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        value={additionalData[field.key] || ''}
                                        onChange={(e) => handleAdditionalDataChange(field.key, e.target.value)}
                                        placeholder={field.placeholder}
                                        className="w-full bg-bg-dark text-white border border-white-10 rounded-xl p-4 text-sm font-mono placeholder-dim focus:outline-none focus:border-primary transition-colors"
                                    />
                                )}
                            </div>
                        ))}

                        {error && (
                            <div className="bg-error-10 text-error border border-error-20 rounded-xl p-4 text-xs">
                                <strong>Error:</strong> {error}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative">
                <div className="bg-bg-dark p-8 rounded-3xl border border-white-5 font-mono text-sm text-muted leading-relaxed whitespace-pre-wrap max-h-[500px] overflow-y-auto bento-card shadow-none">
                    <div
                        dangerouslySetInnerHTML={{ __html: getProcessedPrompt(!!improvedPrompt) }}
                    />
                </div>
            </div>
        </div>
    );
};
