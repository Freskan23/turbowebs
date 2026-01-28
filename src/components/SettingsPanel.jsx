import React, { useState, useEffect } from 'react';
import { Settings, Key, Eye, EyeOff, CheckCircle, AlertCircle, X } from 'lucide-react';
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
            setSaved(false);
            setTestResult(null);
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

    const handleInputChange = (e) => {
        setApiKey(e.target.value);
    };

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(8px)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    backgroundColor: '#1a1a2e',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    maxWidth: '500px',
                    width: '100%',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            padding: '0.75rem',
                            borderRadius: '1rem',
                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                            color: '#6366f1'
                        }}>
                            <Settings size={24} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', margin: 0 }}>Configuración</h2>
                            <p style={{ fontSize: '0.75rem', color: '#666', margin: 0 }}>API Keys y preferencias</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '0.75rem',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#666'
                        }}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.875rem',
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: '0.75rem'
                        }}>
                            <Key size={16} style={{ color: '#6366f1' }} />
                            OpenAI API Key
                        </label>
                        <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '1rem' }}>
                            Necesaria para la función "Mejorar con AI".
                            Obtén tu key en <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1' }}>platform.openai.com</a>
                        </p>

                        <div style={{ position: 'relative' }}>
                            <input
                                type={showKey ? 'text' : 'password'}
                                value={apiKey}
                                onChange={handleInputChange}
                                placeholder="sk-proj-..."
                                autoComplete="off"
                                style={{
                                    width: '100%',
                                    backgroundColor: '#0f0f1a',
                                    color: 'white',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '0.75rem',
                                    padding: '1rem',
                                    paddingRight: '3rem',
                                    fontSize: '0.875rem',
                                    fontFamily: 'monospace',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowKey(!showKey)}
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#666',
                                    padding: 0
                                }}
                            >
                                {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {testResult && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem',
                                borderRadius: '0.75rem',
                                backgroundColor: testResult.success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                border: `1px solid ${testResult.success ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
                                color: testResult.success ? '#10b981' : '#ef4444'
                            }}
                        >
                            {testResult.success ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                            <span style={{ fontSize: '0.875rem' }}>{testResult.message}</span>
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button
                            onClick={handleTest}
                            disabled={testing || !apiKey.trim()}
                            style={{
                                flex: 1,
                                padding: '0.75rem',
                                fontSize: '0.875rem',
                                borderRadius: '0.75rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backgroundColor: 'transparent',
                                color: 'white',
                                cursor: testing || !apiKey.trim() ? 'not-allowed' : 'pointer',
                                opacity: testing || !apiKey.trim() ? 0.5 : 1
                            }}
                        >
                            {testing ? 'Verificando...' : 'Probar conexión'}
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={!apiKey.trim()}
                            style={{
                                flex: 1,
                                padding: '0.75rem',
                                fontSize: '0.875rem',
                                borderRadius: '0.75rem',
                                border: 'none',
                                backgroundColor: saved ? '#10b981' : '#6366f1',
                                color: 'white',
                                cursor: !apiKey.trim() ? 'not-allowed' : 'pointer',
                                opacity: !apiKey.trim() ? 0.5 : 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem'
                            }}
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
                            style={{
                                width: '100%',
                                fontSize: '0.75rem',
                                color: '#666',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '0.5rem'
                            }}
                        >
                            Eliminar API key guardada
                        </button>
                    )}

                    <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <p style={{ fontSize: '0.75rem', color: '#666', margin: 0 }}>
                            Tu API key se guarda localmente en tu navegador y nunca se envía a nuestros servidores.
                            Solo se usa para comunicarse directamente con OpenAI.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
