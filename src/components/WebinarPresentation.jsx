import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Settings, LogOut, CheckCircle, Sparkles } from 'lucide-react';
import { WEBINAR_SLIDES } from '../data/webinarSlides';
import { DynamicPromptComposer } from './DynamicPromptComposer';
import { SettingsPanel } from './SettingsPanel';
import { useBusiness } from '../context/BusinessContext';

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
                padding: '1rem 2rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.25rem'
                    }}>
                        ⚡
                    </div>
                    <div>
                        <h1 style={{ margin: 0, fontSize: '1rem', fontWeight: 'bold' }}>Webinar Turbo</h1>
                        <span style={{ fontSize: '0.7rem', color: '#6366f1' }}>Manus x SEO Intelligence</span>
                    </div>
                </div>

                {/* Slide Navigation Dots */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    {WEBINAR_SLIDES.map((s, idx) => (
                        <button
                            key={s.id}
                            onClick={() => setCurrentSlide(idx)}
                            style={{
                                width: idx === currentSlide ? '2rem' : '0.5rem',
                                height: '0.5rem',
                                borderRadius: '0.25rem',
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
                    <button
                        onClick={() => setShowSettings(true)}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '8px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#888',
                            cursor: 'pointer'
                        }}
                        title="Configuración API"
                    >
                        <Settings size={18} />
                    </button>
                    <button
                        onClick={handleLogout}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '8px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#888',
                            cursor: 'pointer'
                        }}
                        title="Cerrar Sesión"
                    >
                        <LogOut size={18} />
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                {/* Slide Header */}
                <div style={{ marginBottom: '2rem' }}>
                    {/* Category Badge */}
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        backgroundColor: `${slide.categoryColor}20`,
                        color: slide.categoryColor,
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                    }}>
                        <span>{slide.icon}</span>
                        {slide.category}
                    </div>

                    {/* Title */}
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        margin: '0 0 0.5rem 0',
                        background: 'linear-gradient(135deg, #fff, #888)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        {slide.title}
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#888',
                        margin: 0
                    }}>
                        {slide.subtitle}
                    </p>
                </div>

                {/* Two Column Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 400px) 1fr',
                    gap: '2rem',
                    flex: 1
                }}>
                    {/* Left Column - Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Objetivo */}
                        <div style={{
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '1rem',
                            padding: '1.5rem'
                        }}>
                            <h3 style={{
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                color: slide.categoryColor,
                                margin: '0 0 0.75rem 0',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                🎯 Objetivo
                            </h3>
                            <p style={{
                                margin: 0,
                                color: '#ccc',
                                fontSize: '0.95rem',
                                lineHeight: 1.6
                            }}>
                                {slide.objective}
                            </p>
                        </div>

                        {/* Beneficios */}
                        <div style={{
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '1rem',
                            padding: '1.5rem'
                        }}>
                            <h3 style={{
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                color: '#10b981',
                                margin: '0 0 1rem 0',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                ✅ Lo que vas a conseguir
                            </h3>
                            <ul style={{
                                margin: 0,
                                padding: 0,
                                listStyle: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem'
                            }}>
                                {slide.benefits.map((benefit, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.75rem',
                                        color: '#aaa',
                                        fontSize: '0.9rem'
                                    }}>
                                        <CheckCircle size={16} style={{
                                            color: '#10b981',
                                            flexShrink: 0,
                                            marginTop: '2px'
                                        }} />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Caso de Uso */}
                        <div style={{
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '1rem',
                            padding: '1.5rem'
                        }}>
                            <h3 style={{
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                color: '#f59e0b',
                                margin: '0 0 0.75rem 0',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                💡 Cuándo usarlo
                            </h3>
                            <p style={{
                                margin: 0,
                                color: '#aaa',
                                fontSize: '0.9rem',
                                lineHeight: 1.6
                            }}>
                                {slide.useCase}
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Prompt */}
                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1rem'
                        }}>
                            <Sparkles size={18} style={{ color: '#6366f1' }} />
                            <h3 style={{
                                fontSize: '0.875rem',
                                fontWeight: 'bold',
                                color: 'white',
                                margin: 0
                            }}>
                                Prompt Maestro
                            </h3>
                        </div>
                        <div style={{ flex: 1, overflow: 'auto' }}>
                            <DynamicPromptComposer templateKey={slide.templateKey} />
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Navigation */}
            <footer style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 2rem',
                borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
                <button
                    onClick={goToPrevious}
                    disabled={currentSlide === 0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.75rem',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backgroundColor: 'transparent',
                        color: currentSlide === 0 ? '#444' : 'white',
                        cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
                        fontSize: '0.875rem'
                    }}
                >
                    <ChevronLeft size={18} />
                    Anterior
                </button>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#666',
                    fontSize: '0.875rem'
                }}>
                    <span style={{ color: 'white', fontWeight: 'bold' }}>{currentSlide + 1}</span>
                    <span>/</span>
                    <span>{totalSlides}</span>
                </div>

                <button
                    onClick={goToNext}
                    disabled={currentSlide === totalSlides - 1}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.75rem',
                        border: 'none',
                        backgroundColor: currentSlide === totalSlides - 1 ? '#333' : '#6366f1',
                        color: 'white',
                        cursor: currentSlide === totalSlides - 1 ? 'not-allowed' : 'pointer',
                        fontSize: '0.875rem'
                    }}
                >
                    Siguiente
                    <ChevronRight size={18} />
                </button>
            </footer>

            {/* Settings Modal */}
            <SettingsPanel isOpen={showSettings} onClose={() => setShowSettings(false)} />
        </div>
    );
};
