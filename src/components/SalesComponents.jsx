import React, { useState } from 'react';
import { Info, X, Zap, Check, ChevronRight, Phone, Mail, Twitter, Globe, Star, ShieldCheck, ArrowRight, MessageSquare, ExternalLink } from 'lucide-react';

// Barra superior con aviso de licencias y botón de info
export const SalesTopbar = ({ onOpenInfo }) => {
    return (
        <div style={{
            background: 'linear-gradient(90deg, #1e1b4b 0%, #312e81 100%)',
            color: 'white',
            padding: '0.5rem 1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.85rem',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            zIndex: 1000
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                        background: '#f59e0b',
                        color: '#000',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        fontSize: '0.7rem',
                        animation: 'pulse 2s infinite'
                    }}>
                        ÚLTIMAS PLAZAS
                    </div>
                    <span style={{ fontWeight: '500' }}>Quedan 3 de 10 licencias a precio de lanzamiento. </span>
                    <span style={{ color: '#9ca3af', textDecoration: 'line-through', marginLeft: '0.5rem' }}>599€</span>
                    <span style={{ color: '#fbbf24', fontWeight: 'bold', marginLeft: '0.5rem' }}>350€</span>
                </div>
            </div>

            <button
                onClick={onOpenInfo}
                style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                title="Más información sobre TurboWeb"
            >
                <Info size={16} />
            </button>
        </div>
    );
};

// Banner inferior persuasivo
export const SalesFooter = ({ onOpenInfo }) => {
    return (
        <div style={{
            background: '#0f172a',
            color: 'white',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            zIndex: 1000
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Zap size={20} style={{ color: '#fbbf24' }} />
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>¿Quieres tu propia TurboWeb para dominar tu ciudad?</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Código puro, 100% SEO y entrega en 24 horas.</div>
                </div>
            </div>
            <button
                onClick={onOpenInfo}
                style={{
                    background: '#6366f1',
                    color: 'white',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = '#4f46e5';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = '#6366f1';
                }}
            >
                QUIERO MI TURBOWEB <ArrowRight size={18} />
            </button>
        </div>
    );
};

// Modal de marketing a pantalla completa
export const TurboWebModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '2rem'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: '#0f172a',
                width: '100%',
                maxWidth: '1000px',
                maxHeight: '90vh',
                borderRadius: '24px',
                overflowY: 'auto',
                position: 'relative',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
            }} onClick={e => e.stopPropagation()}>

                {/* Header Interno */}
                <div style={{
                    position: 'sticky',
                    top: 0,
                    background: '#0f172a',
                    padding: '1.5rem 2rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 10
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            background: '#fbbf24',
                            color: '#000',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontWeight: 'bold',
                            fontSize: '0.75rem'
                        }}>
                            NUEVO LANZAMIENTO
                        </div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '900', margin: 0 }}>TurboWeb</h2>
                    </div>
                    <button onClick={onClose} style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer'
                    }}>
                        <X size={24} />
                    </button>
                </div>

                <div style={{ padding: '2rem' }}>
                    {/* Hero Seccion */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem', lineHeight: 1.1 }}>
                            Tu negocio local con la <span style={{ color: '#6366f1' }}>arquitectura técnica perfecta.</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto 2rem' }}>
                            Más rápido. Más visible. Más clientes. La web que Google ama por diseño.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <button style={{
                                background: '#fbbf24',
                                color: '#000',
                                padding: '1rem 2.5rem',
                                borderRadius: '12px',
                                fontWeight: '900',
                                fontSize: '1.1rem',
                                border: 'none',
                                cursor: 'pointer'
                            }}>
                                QUIERO MI TURBOWEB
                            </button>
                            <a href="https://edulaborda.com/turboweb" target="_blank" rel="noreferrer" style={{
                                background: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                padding: '1rem 2rem',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                Ver Demo en Vivo <ExternalLink size={18} />
                            </a>
                        </div>
                        <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
                            Demo real: <strong>Cerrajería Aguado</strong> (Líder en su sector)
                        </p>
                    </div>

                    {/* El Efecto Comparativa */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', textAlign: 'center' }}>El Efecto Comparativa</h3>
                        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '2rem' }}>Por qué una web de 350€ funciona mejor que una de 3.000€.</p>

                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                                        <th style={{ padding: '1rem', color: '#64748b' }}>Característica</th>
                                        <th style={{ padding: '1rem', color: '#94a3b8' }}>Agencia Tradicional</th>
                                        <th style={{ padding: '1rem', color: '#fbbf24', fontWeight: 'bold' }}>TurboWeb</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '1rem', fontWeight: '500' }}>Tiempo de entrega</td>
                                        <td style={{ padding: '1rem', color: '#ef4444' }}>1 - 2 meses</td>
                                        <td style={{ padding: '1rem', color: '#10b981', fontWeight: 'bold' }}>24 Horas</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '1rem', fontWeight: '500' }}>Puntuación Google</td>
                                        <td style={{ padding: '1rem', color: '#ef4444' }}>40-60 (Lenta)</td>
                                        <td style={{ padding: '1rem', color: '#10b981', fontWeight: 'bold' }}>95 - 100 (Relámpago)</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '1rem', fontWeight: '500' }}>Mantenimiento</td>
                                        <td style={{ padding: '1rem', color: '#ef4444' }}>Cuotas mensuales altas</td>
                                        <td style={{ padding: '1rem', color: '#10b981', fontWeight: 'bold' }}>0€ (Tú eres el dueño)</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '1rem', fontWeight: '500' }}>Foco</td>
                                        <td style={{ padding: '1rem', fontStyle: 'italic' }}>"Que quede bonita"</td>
                                        <td style={{ padding: '1rem', color: '#fbbf24', fontWeight: 'bold' }}>Que el teléfono suene</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '1rem', fontWeight: '500' }}>Tecnología</td>
                                        <td style={{ padding: '1rem' }}>Wordpress Lento + Plugins</td>
                                        <td style={{ padding: '1rem', color: '#10b981', fontWeight: 'bold' }}>Código Puro Optimizado</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Caracteristicas */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ color: '#fbbf24', marginBottom: '1rem' }}><Zap size={32} /></div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Diseñada para el Pulgar</h4>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                El 90% de tus clientes te buscarán desde un móvil, probablemente en la calle y con prisa. No necesitan menús complejos, necesitan soluciones.
                            </p>
                            <ul style={{ padding: 0, listStyle: 'none', marginTop: '1.5rem', color: '#10b981', fontSize: '0.9rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Check size={16} /> Botones de llamada flotantes</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Check size={16} /> Navegación para urgencias</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} /> Carga instantánea 4G/5G</li>
                            </ul>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ color: '#6366f1', marginBottom: '1rem' }}><Globe size={32} /></div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Generador de Silos Locales</h4>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Tu ventaja secreta. No solo creamos una página, creamos un ejército de páginas para cada rincón de tu ciudad.
                            </p>
                            <div style={{ marginTop: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px', fontStyle: 'italic', fontSize: '0.85rem' }}>
                                "Si alguien busca 'Fontanero en Barrio X', tú apareces el primero porque tienes una página específica para el Barrio X."
                            </div>
                        </div>
                    </div>

                    {/* Garantia */}
                    <div style={{
                        background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                        padding: '3rem',
                        borderRadius: '24px',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <ShieldCheck size={120} style={{ position: 'absolute', top: -20, right: -20, color: 'rgba(255,255,255,0.1)' }} />
                        <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1rem' }}>Garantía "Google Green Light"</h3>
                        <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                            Eliminamos el riesgo por completo. Si tu web no puntúa en VERDE (90+) en Google PageSpeed Insights el día del lanzamiento, te devolvemos el dinero y te quedas la web gratis.
                        </p>
                    </div>

                    {/* Precios y Oferta */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                        <div style={{
                            background: 'white',
                            color: '#0f172a',
                            padding: '3rem',
                            borderRadius: '32px',
                            width: '100%',
                            maxWidth: '500px',
                            textAlign: 'center',
                            boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.5)',
                            border: '4px solid #6366f1'
                        }}>
                            <div style={{
                                background: '#fef3c7',
                                color: '#d97706',
                                padding: '4px 16px',
                                borderRadius: '20px',
                                fontWeight: 'bold',
                                fontSize: '0.8rem',
                                display: 'inline-block',
                                marginBottom: '1rem'
                            }}>
                                QUEDAN 3 DE 10
                            </div>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>TurboWeb Pack</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '1.5rem', color: '#94a3b8', textDecoration: 'line-through', marginTop: '0.5rem' }}>599€</span>
                                <span style={{ fontSize: '5rem', fontWeight: '950', lineHeight: 1, color: '#0f172a' }}>350€</span>
                            </div>
                            <p style={{ color: '#6366f1', fontWeight: 'bold', marginBottom: '2rem' }}>*Próximo precio: 599€ (Ahorras 249€)</p>

                            <ul style={{ padding: 0, listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: '600' }}><Check size={20} style={{ color: '#10b981' }} /> Garantía Green Light 90+</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: '600' }}><Check size={20} style={{ color: '#10b981' }} /> Integración Google Maps + WhatsApp</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: '600' }}><Check size={20} style={{ color: '#10b981' }} /> Generador de Silos Locales</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: '600' }}><Check size={20} style={{ color: '#10b981' }} /> Dominio + Hosting 1 año incluido</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '600' }}><Check size={20} style={{ color: '#10b981' }} /> Propiedad 100% tuya (Sin alquileres)</li>
                            </ul>

                            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Empieza en 2 minutos</h4>
                            <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem' }}>Rellena los datos básicos de tu negocio y nos ponemos en marcha.</p>

                            <form style={{ textAlign: 'left', gap: '1rem', display: 'flex', flexDirection: 'column' }} onSubmit={e => e.preventDefault()}>
                                <input type="email" placeholder="Tu Email (@)" defaultValue="panojitollc@gmail.com" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0', width: '100%' }} />
                                <input type="text" placeholder="Nombre del Negocio" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0', width: '100%' }} />
                                <input type="text" placeholder="Dirección Completa" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0', width: '100%' }} />
                                <input type="tel" placeholder="Teléfono de Contacto" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #e2e8f0', width: '100%' }} />
                                <button style={{
                                    background: '#6366f1',
                                    color: 'white',
                                    padding: '1.2rem',
                                    borderRadius: '12px',
                                    fontWeight: '900',
                                    fontSize: '1.1rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginTop: '1rem',
                                    boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.4)'
                                }}>
                                    CONTINUAR AL PAGO 🚀
                                </button>
                                <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8' }}>Pago 100% seguro vía Stripe. Factura automática.</p>
                            </form>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '800', textAlign: 'center', marginBottom: '2rem' }}>Preguntas para cerrar Objeciones</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                            {[
                                { q: "¿La web es mía?", a: "Sí, 100%. No hay cuotas ocultas ni 'alquiler' de la web. En 24h tendrás los accesos." },
                                { q: "¿Puedo cambiar el teléfono o textos luego?", a: "Claro. Te damos un panel ultrasencillo para editar lo que necesites sin saber programar." },
                                { q: "¿Qué pasa después del primer año de hosting?", a: "Tú decides. Puedes renovar con nosotros por un precio mínimo o llevarte la web a donde quieras. Es tuya." },
                                { q: "¿Por qué es tan barato (350€)?", a: "Porque hemos automatizado la arqutiectura técnica. No cobramos por 'horas de diseño', cobramos por darte un sistema que rankea." }
                            ].map((item, i) => (
                                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#fbbf24' }}>{item.q}</div>
                                    <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{item.a}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sobre Edu */}
                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '4rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '3rem'
                    }}>
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '1.5rem' }}>Edu Laborda</h3>
                            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                                Consultor SEO Local especializado en Google Business Profile y posicionamiento local. Ayudo a negocios de servicios a ser la primera opción cuando alguien busca en su ciudad.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#94a3b8' }}><Phone size={20} /> +34 693 635 264</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#94a3b8' }}><Mail size={20} /> eduardo.laborda.triguero@gmail.com</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#94a3b8' }}><Twitter size={20} /> @Edu_Yinyangseo</div>
                            </div>
                        </div>

                        <div style={{ flex: '2', minWidth: '300px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h5 style={{ fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>Servicios</h5>
                                <ul style={{ padding: 0, listStyle: 'none', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '2' }}>
                                    <li>Auditorías SEO Local</li>
                                    <li>Creación Ficha GBP</li>
                                    <li>Optimización GBP</li>
                                    <li>Citaciones</li>
                                    <li>Reputación Online</li>
                                    <li>Desarrollo Web</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style={{ fontWeight: 'bold', marginBottom: '1.5rem', color: '#fbbf24' }}>Herramientas</h5>
                                <ul style={{ padding: 0, listStyle: 'none', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '2' }}>
                                    <li>Comparakw Local ✨</li>
                                    <li>Los Compas del SEO Local</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style={{ fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>Recursos</h5>
                                <ul style={{ padding: 0, listStyle: 'none', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '2' }}>
                                    <li>Blog SEO Local</li>
                                    <li>Guías y Tutoriales</li>
                                    <li>Casos de Éxito</li>
                                    <li>YinYang Podcast</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        marginTop: '4rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        textAlign: 'center',
                        color: '#64748b',
                        fontSize: '0.85rem'
                    }}>
                        © 2026 edulaborda.com - Todos los derechos reservados
                    </div>
                </div>
            </div>
        </div>
    );
};
