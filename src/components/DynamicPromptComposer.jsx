import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import { PROMPTS } from '../prompts/templates';
import { Copy, CheckCircle, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

export const DynamicPromptComposer = ({ templateKey }) => {
    const { businessData } = useBusiness();
    const [copied, setCopied] = useState(false);

    const getProcessedPrompt = () => {
        let text = PROMPTS[templateKey] || '';
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

    const copyToClipboard = () => {
        let text = PROMPTS[templateKey] || '';
        const variables = text.match(/{{(.*?)}}/g) || [];

        variables.forEach(v => {
            const key = v.replace(/{{|}}/g, '').trim();
            const rawValue = businessData[key];
            const value = Array.isArray(rawValue) ? rawValue.join(', ') : rawValue;

            text = text.replace(v, value || `[${key.toUpperCase()}]`);
        });

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center bg-white-5 p-4 rounded-2xl border border-white-5">
                <div className="flex items-center gap-3">
                    <Terminal size={18} className="text-dim" />
                    <span className="text-xs font-bold text-dim uppercase tracking-widest">{templateKey}</span>
                </div>
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
                            {copied ? "Sincronizado" : "Copiar a Manus"}
                        </motion.div>
                    </AnimatePresence>
                </button>
            </div>

            <div className="relative">
                <div className="bg-bg-dark p-8 rounded-3xl border border-white-5 font-mono text-sm text-muted leading-relaxed whitespace-pre-wrap max-h-[500px] overflow-y-auto bento-card shadow-none">
                    <div
                        dangerouslySetInnerHTML={{ __html: getProcessedPrompt() }}
                    />
                </div>
            </div>
        </div>
    );
};
