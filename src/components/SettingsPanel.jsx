import React, { useState, useEffect } from 'react';
import { Settings, Key, Eye, EyeOff, CheckCircle, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { saveAPIKey, getAPIKey, hasAPIKey } from '../utils/openai';

export const SettingsPanel = ({ isOpen, onClose }) => {
    const [apiKey, setApiKey] = useState('');
    const [showKey, setShowKey] = useState(false);
    const [saved, setSaved] = useState(false);
    const [testing, setTesting] = useState(false);
    const [testResult, setTestResult] = useState(null);

    useEffect(() => {
        if (isOpen) {
            setApiKey(getAPIKey());
            setSaved(hasAPIKey());
        }
    }, [isOpen]);

    const handleSave = () => {
        saveAPIKey(apiKey.trim());
        setSaved(true);
        setTestResult(null);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleTest = async () => {
        if (!apiKey.trim()) {
            setTestResult({ success: false, message: 'Introduce una API key primero' });
            return;
        }

        setTesting(true);
        setTestResult(null);

        try {
            const response = await fetch('https://api.openai.com/v1/models', {
                headers: {
                    'Authorization': `Bearer ${apiKey.trim()}`
                }
            });

            if (response.ok) {
                setTestResult({ success: true, message: 'API key válida' });
            } else {
                const error = await response.json();
                setTestResult({ success: false, message: error.error?.message || 'API key inválida' });
            }
        } catch (error) {
            setTestResult({ success: false, message: 'Error de conexión' });
        } finally {
            setTesting(false);
        }
    };

    const handleClear = () => {
        setApiKey('');
        saveAPIKey('');
        setTestResult(null);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-bg-card border border-white-10 rounded-3xl p-8 max-w-lg w-full shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-primary-10 text-primary">
                                <Settings size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">Configuración</h2>
                                <p className="text-xs text-dim">API Keys y preferencias</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-xl hover:bg-white-5 transition-colors"
                        >
                            <X size={20} className="text-dim" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                                <Key size={16} className="text-primary" />
                                OpenAI API Key
                            </label>
                            <p className="text-xs text-dim mb-4">
                                Necesaria para la función "Mejorar con AI".
                                Obtén tu key en <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">platform.openai.com</a>
                            </p>

                            <div className="relative">
                                <input
                                    type={showKey ? 'text' : 'password'}
                                    value={apiKey}
                                    onChange={(e) => setApiKey(e.target.value)}
                                    placeholder="sk-proj-..."
                                    className="w-full bg-bg-dark text-white border border-white-10 rounded-xl p-4 pr-12 text-sm font-mono placeholder-dim focus:outline-none focus:border-primary transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowKey(!showKey)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-dim hover:text-white transition-colors"
                                >
                                    {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {testResult && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex items-center gap-3 p-4 rounded-xl ${
                                    testResult.success
                                        ? 'bg-success/10 border border-success/20 text-success'
                                        : 'bg-error/10 border border-error/20 text-error'
                                }`}
                            >
                                {testResult.success ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                                <span className="text-sm">{testResult.message}</span>
                            </motion.div>
                        )}

                        <div className="flex gap-3">
                            <button
                                onClick={handleTest}
                                disabled={testing || !apiKey.trim()}
                                className="flex-1 btn-secondary py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {testing ? 'Verificando...' : 'Probar conexión'}
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={!apiKey.trim()}
                                className="flex-1 btn-primary py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {saved ? (
                                    <>
                                        <CheckCircle size={16} />
                                        Guardado
                                    </>
                                ) : (
                                    'Guardar'
                                )}
                            </button>
                        </div>

                        {hasAPIKey() && (
                            <button
                                onClick={handleClear}
                                className="w-full text-xs text-dim hover:text-error transition-colors py-2"
                            >
                                Eliminar API key guardada
                            </button>
                        )}

                        <div className="pt-4 border-t border-white-5">
                            <p className="text-xs text-dim">
                                Tu API key se guarda localmente en tu navegador y nunca se envía a nuestros servidores.
                                Solo se usa para comunicarse directamente con OpenAI.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
