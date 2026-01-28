import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Settings, LogOut, CheckCircle, Sparkles, Copy, Wand2, FileText, AlertCircle } from 'lucide-react';
import { WEBINAR_SLIDES } from '../data/webinarSlides';
import { SettingsPanel } from './SettingsPanel';
import { useBusiness } from '../context/BusinessContext';
import { PROMPTS } from '../prompts/templates';
import { improvePromptWithAI, hasAPIKey } from '../utils/openai';
import { InfoModal, HelpButton } from './HelpSystem';
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
    const [isInfoOpen, setIsInfoOpen] = useState(false);

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

    const isComplete = (slide.fields || []).every(field => {
        if (!field.required) return true;
        const val = localData[field.key];
        if (field.key === 'manusReport') return (val?.trim()?.length || 0) > 100;
        return (val?.trim()?.length || 0) > 0;
    });

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
            <div style={{ marginBottom: '1.5rem', textAlign: 'center', position: 'relative' }}>
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

                <HelpButton
                    onClick={() => setIsInfoOpen(true)}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}
                />
            </div>

            <InfoModal
                isOpen={isInfoOpen}
                onClose={() => setIsInfoOpen(false)}
                title={`¿Por qué el ${slide.title}?`}
                content={
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <p><strong>¿Qué buscamos?</strong> {slide.info?.why || "Recopilar datos fundamentales para que Manus pueda realizar un análisis preciso de la competencia."}</p>
                        <p><strong>¿Qué conseguiremos?</strong> {slide.info?.goal || "Una base sólida de datos que alimentará todos los prompts siguientes, asegurando que el contenido generado sea relevante y profesional."}</p>
                        {slide.info?.tip && <p style={{ color: '#10b981' }}><strong>Tip:</strong> {slide.info.tip}</p>}
                    </div>
                }
            />

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
                {Array.isArray(slide.instructions) && slide.instructions.map((instruction, idx) => (
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
            <div style={{ display: 'flex', gap: '1.5rem', flex: 1, overflow: 'hidden' }}>
                {slide.fields?.map((field, idx) => (
                    <div key={field.key} style={{
                        flex: field.large ? 2 : 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: field.large ? '500px' : '250px'
                    }}>
                        <label style={{
                            fontSize: '0.85rem',
                            color: '#888',
                            display: 'block',
                            marginBottom: '0.5rem'
                        }}>
                            {field.label} {field.required && <span style={{ color: '#ef4444' }}>*</span>}
                        </label>

                        {field.type === 'textarea' ? (
                            <textarea
                                value={localData[field.key] || ''}
                                onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                placeholder={field.placeholder}
                                style={{
                                    flex: 1,
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: '#0f0f1a',
                                    border: ((localData[field.key]?.trim()?.length || 0) > (field.key === 'manusReport' ? 100 : 0)) ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '0.75rem',
                                    color: 'white',
                                    fontSize: '0.9rem',
                                    resize: 'none',
                                    outline: 'none',
                                    boxSizing: 'border-box',
                                    lineHeight: 1.5
                                }}
                            />
                        ) : (
                            <input
                                type="text"
                                value={localData[field.key] || ''}
                                onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                placeholder={field.placeholder}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem',
                                    backgroundColor: '#0f0f1a',
                                    border: ((localData[field.key]?.trim()?.length || 0) > 0) ? '2px solid #10b981' : '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '0.75rem',
                                    color: 'white',
                                    fontSize: '0.9rem',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                            />
                        )}

                        {field.key === 'manusReport' && (localData.manusReport?.trim()?.length || 0) > 100 && (
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

                        {idx === slide.fields.length - 1 && (
                            <>
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
                            </>
                        )}
                    </div>
                ))}
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
    const [isInfoOpen, setIsInfoOpen] = useState(false);

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
    const hasManusReport = (businessData.manusReport?.trim()?.length || 0) > 100;

    // Manejar cambios en campos
    const handleFieldChange = (key, value) => {
        setLocalData(prev => ({ ...prev, [key]: value }));
        updateBusinessData({ [key]: value });
    };

    // Manejar respuesta de Manus
    const handleManusAnswerChange = (value) => {
        updateBusinessData({
            manusAnswers: {
                ...businessData.manusAnswers,
                [slide.id]: value
            }
        });
    };

    const currentManusAnswer = businessData.manusAnswers?.[slide.id] || '';

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

    const slideObj = {
        objective: 'Objetivo no definido',
        benefits: [],
        useCase: 'Caso de uso no definido',
        ...slide
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
                            backgroundColor: `${slideObj.categoryColor}20`,
                            color: slideObj.categoryColor,
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                        }}>
                            <span>{slideObj.icon}</span>
                            {slideObj.category}
                        </div>
                        {/* Indicador de Manus Report */}
                        {slideObj.usesManusReport && (
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
                    {slideObj.title}
                </h2>
                <p style={{ fontSize: '1rem', color: '#666', margin: 0 }}>
                    {slideObj.subtitle}
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
                            color: slideObj.categoryColor,
                            margin: '0 0 0.5rem 0',
                            textTransform: 'uppercase'
                        }}>
                            Objetivo
                        </h3>
                        <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem', lineHeight: 1.5 }}>
                            {slideObj.objective}
                        </p>
                    </div>

                    {/* Beneficios */}
                    {slideObj.benefits && slideObj.benefits.length > 0 && (
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
                                {slideObj.benefits.map((b, i) => (
                                    <li key={i} style={{ marginBottom: '0.25rem' }}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Campos de entrada */}
                    {slideObj.fields && slideObj.fields.length > 0 && (
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
                                {slideObj.fields.map(field => (
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

                    {/* Respuesta de Manus */}
                    {!slideObj.usesManusReport ? (
                        <div style={{
                            backgroundColor: 'rgba(16, 185, 129, 0.05)',
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                            borderRadius: '0.75rem',
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            minHeight: '200px'
                        }}>
                            <h3 style={{
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                                color: '#10b981',
                                margin: '0 0 0.5rem 0',
                                textTransform: 'uppercase',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem'
                            }}>
                                <CheckCircle size={14} />
                                Respuesta de Manus para este paso
                            </h3>
                            <textarea
                                value={currentManusAnswer}
                                onChange={(e) => handleManusAnswerChange(e.target.value)}
                                placeholder="Pega aquí la respuesta que te dio Manus después de ejecutar el prompt..."
                                style={{
                                    flex: 1,
                                    width: '100%',
                                    padding: '0.75rem',
                                    backgroundColor: '#0a0a0f',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '0.5rem',
                                    color: '#ccc',
                                    fontSize: '0.8rem',
                                    resize: 'none',
                                    outline: 'none',
                                    fontFamily: 'monospace'
                                }}
                            />
                        </div>
                    ) : (
                        <div style={{
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            border: '1px solid #10b981',
                            borderRadius: '0.75rem',
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            gap: '0.75rem'
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: '#10b981',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white'
                            }}>
                                <CheckCircle size={24} />
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 0.25rem 0', color: '#10b981', fontSize: '0.9rem' }}>Reporte Principal Vinculado</h4>
                                <p style={{ margin: 0, color: '#aaa', fontSize: '0.75rem' }}>
                                    Este paso utiliza automáticamente el análisis de Manus que pegaste en el Paso 2.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Cuándo usar */}
                    {slideObj.useCase && (
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
                                {slideObj.useCase}
                            </p>
                        </div>
                    )}
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
                                Prompt Maestro (para Manus)
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
                    <IntroSlide key={slide.id} slide={slide} onStart={goToNext} />
                ) : slide.type === 'data-input' ? (
                    <DataInputSlide key={slide.id} slide={slide} onNext={goToNext} />
                ) : slide.type === 'manus-prompt' ? (
                    <PromptSlide key={slide.id} slide={slide} />
                ) : (
                    <PromptSlide key={slide.id} slide={slide} />
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
