import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Settings, LogOut, CheckCircle, Sparkles, Copy, Wand2, FileText, AlertCircle } from 'lucide-react';
import { WEBINAR_SLIDES } from '../data/webinarSlides';
import { SettingsPanel } from './SettingsPanel';
import { useBusiness } from '../context/BusinessContext';
import { PROMPTS } from '../prompts/templates';
import { improvePromptWithAI, hasAPIKey } from '../utils/openai';

// Componente para la página de introducción
const IntroSlide = ({ slide, onStart }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 140px)',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <img
                src="/logo.png"
                alt="TurboWebs 2026"
                style={{ width: '280px', height: 'auto', marginBottom: '1.5rem' }}
            />
            <p style={{ fontSize: '1.5rem', color: '#888', marginBottom: '0.5rem' }}>
                {slide.subtitle}
            </p>
            <p style={{ fontSize: '1rem', color: '#6366f1', fontWeight: '600', marginBottom: '3rem' }}>
                {slide.author}
            </p>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
                maxWidth: '900px',
                width: '100%',
                marginBottom: '3rem'
            }}>
                {slide.agenda.map((item, idx) => (
                    <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem 1.25rem',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '0.75rem',
                        textAlign: 'left'
                    }}>
                        <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                        <div>
                            <p style={{ margin: 0, fontWeight: 'bold', color: 'white', fontSize: '0.95rem' }}>
                                {item.title}
                            </p>
                            <p style={{ margin: 0, color: '#666', fontSize: '0.8rem' }}>
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={onStart}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2.5rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    borderRadius: '9999px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    color: 'white',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
                }}
            >
                Comenzar
                <ChevronRight size={20} />
            </button>
            <div style={{ marginTop: '2rem', color: '#444', fontSize: '0.75rem' }}>
                o usa las flechas del teclado
            </div>
        </div>
    );
};

// Componente para la página de entrada de datos (Reporte de Manus)
const DataInputSlide = ({ slide, onNext }) => {
    const { businessData, updateBusinessData } = useBusiness();
    const [localData, setLocalData] = useState({});

    useEffect(() => {
        const initial = {};
        (slide.fields || []).forEach(field => {
            initial[field.key] = businessData[field.key] || '';
        });
        setLocalData(initial);
    }, [slide.id]);

    const handleFieldChange = (key, value) => {
        setLocalData(prev => ({ ...prev, [key]: value }));
        updateBusinessData({ [key]: value });
    };

    const hasReport = localData.manusReport?.trim().length > 100;
    const hasCategoria = localData.categoria?.trim().length > 0;
    const isComplete = hasReport && hasCategoria;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
            height: 'calc(100vh - 140px)',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.35rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: `${slide.categoryColor}20`,
                    color: slide.categoryColor,
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                }}>
                    <span>{slide.icon}</span>
                    {slide.category}
                </div>
                <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    margin: '0 0 0.5rem 0',
                    color: 'white'
                }}>
                    {slide.title}
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#888', margin: 0 }}>
                    {slide.subtitle}
                </p>
            </div>

            {/* Descripción */}
            <div style={{
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '1rem',
                padding: '1.25rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0, color: '#c4b5fd', fontSize: '1rem', lineHeight: 1.6 }}>
                    {slide.description}
                </p>
            </div>

            {/* Instrucciones */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                marginBottom: '1.5rem'
            }}>
                {slide.instructions.map((instruction, idx) => (
                    <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '1rem',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '0.75rem'
                    }}>
                        <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: slide.categoryColor,
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            flexShrink: 0
                        }}>
                            {idx + 1}
                        </span>
                        <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem', lineHeight: 1.4 }}>
                            {instruction}
                        </p>
                    </div>
                ))}
            </div>

            {/* Campos de entrada */}
            <div style={{ display: 'flex', gap: '1rem', flex: 1, overflow: 'hidden' }}>
                {/* Textarea grande para el reporte */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <label style={{
                        fontSize: '0.85rem',
                        color: '#888',
                        display: 'block',
                        marginBottom: '0.5rem'
                    }}>
                        {slide.fields[0].label} <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                        value={localData.manusReport || ''}
                        onChange={(e) => handleFieldChange('manusReport', e.target.value)}
                        placeholder={slide.fields[0].placeholder}
                        style={{
                            flex: 1,
                            width: '100%',
                            padding: '1rem',
                            backgroundColor: '#0f0f1a',
                            border: hasReport ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '0.75rem',
                            color: 'white',
                            fontSize: '0.9rem',
                            resize: 'none',
                            outline: 'none',
                            boxSizing: 'border-box',
                            lineHeight: 1.5
                        }}
                    />
                    {hasReport && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginTop: '0.5rem',
                            color: '#10b981',
                            fontSize: '0.8rem'
                        }}>
                            <CheckCircle size={14} />
                            Reporte cargado ({localData.manusReport.length} caracteres)
                        </div>
                    )}
                </div>

                {/* Campo de categoría */}
                <div style={{ width: '250px', display: 'flex', flexDirection: 'column' }}>
                    <label style={{
                        fontSize: '0.85rem',
                        color: '#888',
                        display: 'block',
                        marginBottom: '0.5rem'
                    }}>
                        {slide.fields[1].label} <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                        type="text"
                        value={localData.categoria || ''}
                        onChange={(e) => handleFieldChange('categoria', e.target.value)}
                        placeholder={slide.fields[1].placeholder}
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            backgroundColor: '#0f0f1a',
                            border: hasCategoria ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '0.75rem',
                            color: 'white',
                            fontSize: '0.9rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                        }}
                    />

                    {/* Output hint */}
                    <div style={{
                        marginTop: '1.5rem',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        borderRadius: '0.75rem',
                        padding: '1rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <FileText size={16} style={{ color: '#10b981' }} />
                            <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.8rem' }}>Importante</span>
                        </div>
                        <p style={{ margin: 0, color: '#6ee7b7', fontSize: '0.8rem', lineHeight: 1.5 }}>
                            {slide.outputHint}
                        </p>
                    </div>

                    {/* Botón continuar */}
                    <button
                        onClick={onNext}
                        disabled={!isComplete}
                        style={{
                            marginTop: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '1rem',
                            borderRadius: '0.75rem',
                            border: 'none',
                            backgroundColor: isComplete ? '#6366f1' : '#333',
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            cursor: isComplete ? 'pointer' : 'not-allowed'
                        }}
                    >
                        Continuar
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

// Componente para slides de prompts
const PromptSlide = ({ slide }) => {
    const { businessData, updateBusinessData } = useBusiness();
    const [localData, setLocalData] = useState({});
    const [copied, setCopied] = useState(false);
    const [isImproving, setIsImproving] = useState(false);
    const [improvedPrompt, setImprovedPrompt] = useState(null);

    // Inicializar datos locales desde businessData
    useEffect(() => {
        const initial = {};
        (slide.fields || []).forEach(field => {
            initial[field.key] = businessData[field.key] || '';
        });
        setLocalData(initial);
        setImprovedPrompt(null);
    }, [slide.id]);

    // Calcular completitud del prompt
    const calculateCompletion = () => {
        const requiredFields = (slide.fields || []).filter(f => f.required);
        if (requiredFields.length === 0) return 100;
        const filled = requiredFields.filter(f => localData[f.key]?.trim()).length;
        return Math.round((filled / requiredFields.length) * 100);
    };

    const completion = calculateCompletion();
    const hasManusReport = businessData.manusReport?.trim().length > 100;

    // Manejar cambios en campos
    const handleFieldChange = (key, value) => {
        setLocalData(prev => ({ ...prev, [key]: value }));
        updateBusinessData({ [key]: value });
    };

    // Generar prompt con variables reemplazadas
    const getProcessedPrompt = () => {
        let text = improvedPrompt || PROMPTS[slide.templateKey] || '';
        const allData = { ...businessData, ...localData };

        const variables = text.match(/{{(.*?)}}/g) || [];
        variables.forEach(v => {
            const key = v.replace(/{{|}}/g, '').trim();
            const rawValue = allData[key];
            const value = Array.isArray(rawValue) ? rawValue.join(', ') : (rawValue || '');
            text = text.replace(v, value || `[${key.toUpperCase()}]`);
        });
        return text;
    };

    // Copiar prompt
    const handleCopy = () => {
        navigator.clipboard.writeText(getProcessedPrompt());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Mejorar con IA
    const handleImproveWithAI = async () => {
        if (!hasAPIKey()) {
            alert('Configura tu API key de OpenAI en el botón de Configuración (engranaje)');
            return;
        }
        setIsImproving(true);
        try {
            const basePrompt = getProcessedPrompt();
            const improved = await improvePromptWithAI(basePrompt, {});
            setImprovedPrompt(improved);
        } catch (error) {
            alert('Error: ' + error.message);
        } finally {
            setIsImproving(false);
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem 2rem',
            maxWidth: '1400px',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
            height: 'calc(100vh - 140px)',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <div style={{ marginBottom: '1.5rem', flexShrink: 0 }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            backgroundColor: `${slide.categoryColor}20`,
                            color: slide.categoryColor,
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                        }}>
                            <span>{slide.icon}</span>
                            {slide.category}
                        </div>
                        {/* Indicador de Manus Report */}
                        {slide.usesManusReport && (
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '9999px',
                                backgroundColor: hasManusReport ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                color: hasManusReport ? '#10b981' : '#ef4444',
                                fontSize: '0.7rem',
                                fontWeight: 'bold'
                            }}>
                                {hasManusReport ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                                {hasManusReport ? 'Reporte Manus cargado' : 'Falta reporte Manus'}
                            </div>
                        )}
                    </div>
                    {/* Barra de completitud */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '0.75rem', color: '#666' }}>Campos completados</span>
                        <div style={{
                            width: '120px',
                            height: '8px',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: `${completion}%`,
                                height: '100%',
                                backgroundColor: completion === 100 ? '#10b981' : completion > 50 ? '#f59e0b' : '#ef4444',
                                transition: 'all 0.3s ease'
                            }} />
                        </div>
                        <span style={{
                            fontSize: '0.875rem',
                            fontWeight: 'bold',
                            color: completion === 100 ? '#10b981' : completion > 50 ? '#f59e0b' : '#ef4444'
                        }}>
                            {completion}%
                        </span>
                    </div>
                </div>
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    margin: '0 0 0.25rem 0',
                    color: 'white'
                }}>
                    {slide.title}
                </h2>
                <p style={{ fontSize: '1rem', color: '#666', margin: 0 }}>
                    {slide.subtitle}
                </p>
            </div>

            {/* Main Content - 2 columns */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '320px 1fr',
                gap: '1.5rem',
                flex: 1,
                overflow: 'hidden'
            }}>
                {/* Left Column - Info + Fields */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflow: 'auto' }}>
                    {/* Objetivo */}
                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '0.75rem',
                        padding: '1rem'
                    }}>
                        <h3 style={{
                            fontSize: '0.7rem',
                            fontWeight: 'bold',
                            color: slide.categoryColor,
                            margin: '0 0 0.5rem 0',
                            textTransform: 'uppercase'
                        }}>
                            Objetivo
                        </h3>
                        <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem', lineHeight: 1.5 }}>
                            {slide.objective}
                        </p>
                    </div>

                    {/* Beneficios */}
                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '0.75rem',
                        padding: '1rem'
                    }}>
                        <h3 style={{
                            fontSize: '0.7rem',
                            fontWeight: 'bold',
                            color: '#10b981',
                            margin: '0 0 0.5rem 0',
                            textTransform: 'uppercase'
                        }}>
                            Qué conseguirás
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#aaa', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            {slide.benefits?.map((b, i) => (
                                <li key={i} style={{ marginBottom: '0.25rem' }}>{b}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Campos de entrada */}
                    {slide.fields && slide.fields.length > 0 && (
                        <div style={{
                            backgroundColor: 'rgba(99, 102, 241, 0.05)',
                            border: '1px solid rgba(99, 102, 241, 0.2)',
                            borderRadius: '0.75rem',
                            padding: '1rem'
                        }}>
                            <h3 style={{
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                                color: '#6366f1',
                                margin: '0 0 0.75rem 0',
                                textTransform: 'uppercase'
                            }}>
                                Completa estos datos
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {slide.fields.map(field => (
                                    <div key={field.key}>
                                        <label style={{
                                            fontSize: '0.75rem',
                                            color: '#888',
                                            display: 'block',
                                            marginBottom: '0.25rem'
                                        }}>
                                            {field.label} {field.required && <span style={{ color: '#ef4444' }}>*</span>}
                                        </label>
                                        <input
                                            type={field.type === 'url' ? 'url' : 'text'}
                                            value={localData[field.key] || ''}
                                            onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                            placeholder={field.placeholder}
                                            style={{
                                                width: '100%',
                                                padding: '0.6rem 0.75rem',
                                                backgroundColor: '#0f0f1a',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '0.5rem',
                                                color: 'white',
                                                fontSize: '0.85rem',
                                                outline: 'none',
                                                boxSizing: 'border-box'
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Cuándo usar */}
                    <div style={{
                        backgroundColor: 'rgba(245, 158, 11, 0.05)',
                        border: '1px solid rgba(245, 158, 11, 0.2)',
                        borderRadius: '0.75rem',
                        padding: '1rem'
                    }}>
                        <h3 style={{
                            fontSize: '0.7rem',
                            fontWeight: 'bold',
                            color: '#f59e0b',
                            margin: '0 0 0.5rem 0',
                            textTransform: 'uppercase'
                        }}>
                            Cuándo usarlo
                        </h3>
                        <p style={{ margin: 0, color: '#aaa', fontSize: '0.8rem', lineHeight: 1.5 }}>
                            {slide.useCase}
                        </p>
                    </div>
                </div>

                {/* Right Column - Prompt */}
                <div style={{
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.75rem',
                        flexShrink: 0
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Sparkles size={16} style={{ color: '#6366f1' }} />
                            <h3 style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'white', margin: 0 }}>
                                Prompt Maestro
                            </h3>
                            {improvedPrompt && (
                                <span style={{
                                    fontSize: '0.65rem',
                                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                    color: '#10b981',
                                    padding: '0.15rem 0.5rem',
                                    borderRadius: '9999px'
                                }}>
                                    Mejorado con IA
                                </span>
                            )}
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                                onClick={handleImproveWithAI}
                                disabled={isImproving}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    padding: '0.4rem 0.75rem',
                                    borderRadius: '0.5rem',
                                    border: 'none',
                                    backgroundColor: '#f59e0b',
                                    color: 'white',
                                    fontSize: '0.75rem',
                                    cursor: 'pointer',
                                    opacity: isImproving ? 0.7 : 1
                                }}
                            >
                                <Wand2 size={14} />
                                {isImproving ? 'Mejorando...' : 'Mejorar con IA'}
                            </button>
                            <button
                                onClick={handleCopy}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    padding: '0.4rem 0.75rem',
                                    borderRadius: '0.5rem',
                                    border: 'none',
                                    backgroundColor: copied ? '#10b981' : '#6366f1',
                                    color: 'white',
                                    fontSize: '0.75rem',
                                    cursor: 'pointer'
                                }}
                            >
                                {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
                                {copied ? 'Copiado' : 'Copiar'}
                            </button>
                        </div>
                    </div>
                    <div style={{
                        flex: 1,
                        overflow: 'auto',
                        backgroundColor: '#0a0a0f',
                        borderRadius: '0.5rem',
                        padding: '1rem',
                        fontFamily: 'monospace',
                        fontSize: '0.8rem',
                        color: '#ccc',
                        lineHeight: 1.6,
                        whiteSpace: 'pre-wrap'
                    }}>
                        {getProcessedPrompt()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const WebinarPresentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showSettings, setShowSettings] = useState(false);
    const { setUser } = useBusiness();

    const slide = WEBINAR_SLIDES[currentSlide];
    const totalSlides = WEBINAR_SLIDES.length;

    const goToPrevious = () => {
        if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
    };

    const goToNext = () => {
        if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
    };

    const handleLogout = () => {
        localStorage.removeItem('masterclass_user');
        setUser(null);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (e.key === 'ArrowRight') goToNext();
            else if (e.key === 'ArrowLeft') goToPrevious();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#0a0a0f',
            color: 'white',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Header */}
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 2rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                flexShrink: 0
            }}>
                <img src="/logo.png" alt="TurboWebs 2026" style={{ height: '32px', width: 'auto' }} />
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                    {WEBINAR_SLIDES.map((s, idx) => (
                        <button
                            key={s.id}
                            onClick={() => setCurrentSlide(idx)}
                            style={{
                                width: idx === currentSlide ? '1.5rem' : '0.4rem',
                                height: '0.4rem',
                                borderRadius: '0.2rem',
                                border: 'none',
                                backgroundColor: idx === currentSlide ? s.categoryColor : 'rgba(255,255,255,0.2)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            title={s.title}
                        />
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => setShowSettings(true)} style={{
                        padding: '0.4rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)', color: '#888', cursor: 'pointer'
                    }} title="Configuración API">
                        <Settings size={16} />
                    </button>
                    <button onClick={handleLogout} style={{
                        padding: '0.4rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)', color: '#888', cursor: 'pointer'
                    }} title="Cerrar Sesión">
                        <LogOut size={16} />
                    </button>
                </div>
            </header>

            {/* Main */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {slide.type === 'intro' ? (
                    <IntroSlide slide={slide} onStart={goToNext} />
                ) : slide.type === 'data-input' ? (
                    <DataInputSlide slide={slide} onNext={goToNext} />
                ) : (
                    <PromptSlide slide={slide} />
                )}
            </main>

            {/* Footer */}
            {slide.type !== 'intro' && (
                <footer style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 2rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    flexShrink: 0
                }}>
                    <button onClick={goToPrevious} disabled={currentSlide === 0} style={{
                        display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1rem',
                        borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)',
                        backgroundColor: 'transparent', color: currentSlide === 0 ? '#444' : 'white',
                        cursor: currentSlide === 0 ? 'not-allowed' : 'pointer', fontSize: '0.8rem'
                    }}>
                        <ChevronLeft size={16} /> Anterior
                    </button>
                    <div style={{ color: '#666', fontSize: '0.8rem' }}>
                        <span style={{ color: 'white', fontWeight: 'bold' }}>{currentSlide + 1}</span> / {totalSlides}
                    </div>
                    <button onClick={goToNext} disabled={currentSlide === totalSlides - 1} style={{
                        display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1rem',
                        borderRadius: '0.5rem', border: 'none',
                        backgroundColor: currentSlide === totalSlides - 1 ? '#333' : '#6366f1',
                        color: 'white', cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
                        fontSize: '0.8rem'
                    }}>
                        Siguiente <ChevronRight size={16} />
                    </button>
                </footer>
            )}

            <SettingsPanel isOpen={showSettings} onClose={() => setShowSettings(false)} />
        </div>
    );
};
