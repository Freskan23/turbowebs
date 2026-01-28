import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import { Building2, ShoppingBag, Palette, ChevronRight, ChevronLeft, Save, Search } from 'lucide-react';
import { clsx } from 'clsx';

const InputField = ({ label, name, placeholder, value, onChange, type = "text" }) => (
    <div className="flex flex-col gap-2">
        <label className="text-xs text-dim">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="modern-input"
        />
    </div>
);

export const BusinessWizard = () => {
    const { businessData, updateBusinessData } = useBusiness();
    const [step, setStep] = useState(1);

    const steps = [
        { id: 1, name: 'Negocio', icon: Building2 },
        { id: 2, name: 'Oferta', icon: ShoppingBag },
        { id: 3, name: 'Estilo', icon: Palette },
        { id: 4, name: 'SEO Pro', icon: Search }
    ];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        updateBusinessData({ [name]: type === 'checkbox' ? checked : value });
    };

    return (
        <div className="w-full">
            {/* 2026 Step Indicator */}
            <div className="flex justify-center gap-6 mb-12">
                {steps.map((s) => (
                    <div
                        key={s.id}
                        className={clsx(
                            "flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-500",
                            step === s.id ? "bg-primary text-white shadow-mega" : "bg-white-5 text-dim"
                        )}
                    >
                        <s.icon size={18} />
                        <span className="text-sm font-bold">{s.name}</span>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md-grid-2 gap-8">
                {step === 1 && (
                    <>
                        <div>
                            <InputField label="Nombre de Marca" name="nombre" placeholder="Ej: Cerrajeros Pro" value={businessData.nombre} onChange={handleInputChange} />
                        </div>
                        <div>
                            <InputField label="Categoría" name="categoria" placeholder="Ej: Cerrajería" value={businessData.categoria} onChange={handleInputChange} />
                        </div>
                        <div>
                            <InputField label="Ciudad" name="ciudad" placeholder="Ej: Madrid" value={businessData.ciudad} onChange={handleInputChange} />
                        </div>
                        <div>
                            <InputField label="Teléfono" name="telefono" placeholder="Ej: 600 000 000" value={businessData.telefono} onChange={handleInputChange} />
                        </div>
                        <div className="md-span-2">
                            <InputField label="Palabra Clave Principal" name="keywordPrincipal" placeholder="Ej: cerrajeros urgentes madrid" value={businessData.keywordPrincipal} onChange={handleInputChange} />
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div>
                            <InputField label="Servicio Estrella" name="servicioEstrella" placeholder="Ej: Apertura de Puertas" value={businessData.servicioEstrella} onChange={handleInputChange} />
                        </div>
                        <div>
                            <InputField label="Precio desde" name="precioDesde" placeholder="Ej: 29€" value={businessData.precioDesde} onChange={handleInputChange} />
                        </div>
                        <div className="flex items-center gap-4 p-4 bento-card border-none bg-white-5">
                            <input
                                type="checkbox"
                                name="urgencias24h"
                                checked={businessData.urgencias24h}
                                onChange={handleInputChange}
                                className="w-6 h-6 border-white-10 rounded"
                                style={{ width: '24px', height: '24px', accentColor: 'var(--primary)' }}
                            />
                            <span className="text-sm font-semibold">Urgencias 24h</span>
                        </div>
                        <div>
                            <InputField label="Tiempos" name="tiempos" placeholder="Ej: 20 min" value={businessData.tiempos} onChange={handleInputChange} />
                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-dim">Tono de Marca</label>
                            <select
                                name="tono"
                                value={businessData.tono}
                                onChange={handleInputChange}
                                className="modern-input"
                            >
                                <option value="cercano">Cercano</option>
                                <option value="formal">Profesional</option>
                                <option value="canalla">Atrevido</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-dim">Persona</label>
                            <select
                                name="persona"
                                value={businessData.persona}
                                onChange={handleInputChange}
                                className="modern-input"
                            >
                                <option value="tu">Tú</option>
                                <option value="usted">Usted</option>
                            </select>
                        </div>
                    </>
                )}
                {step === 4 && (
                    <>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-dim">Alcance del Análisis SEO</label>
                            <select name="seoScope" value={businessData.seoScope} onChange={handleInputChange} className="modern-input">
                                <option>Velocidad de carga y Core Web Vitals</option>
                                <option>Estructura de URLs y arquitectura del sitio</option>
                                <option>Etiquetas meta (title, description, headers)</option>
                                <option>Indexación y robots.txt</option>
                                <option>Certificado SSL y seguridad</option>
                                <option>Mobile-friendliness</option>
                                <option>Todos los anteriores (análisis completo)</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-dim">Formato de Entrega</label>
                            <select name="deliveryFormat" value={businessData.deliveryFormat} onChange={handleInputChange} className="modern-input">
                                <option>Un informe consolidado en Markdown/PDF</option>
                                <option>Una hoja de cálculo (Excel/CSV)</option>
                                <option>Un documento detallado por ciudad</option>
                                <option>Una presentación con gráficos</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-dim">Profundidad del Análisis</label>
                            <select name="analysisDepth" value={businessData.analysisDepth} onChange={handleInputChange} className="modern-input">
                                <option>Análisis de palabras clave (keywords)</option>
                                <option>Análisis de backlinks/enlaces entrantes</option>
                                <option>Análisis de contenido (SEO semántico)</option>
                                <option>Solo datos técnicos y Local Pack</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 bento-card p-6 bg-white-5 border-none">
                            <label className="text-xs text-dim mb-4 block">Datos de Google Business Profile</label>
                            <div className="grid grid-cols-1 md-grid-2 gap-4">
                                {['Calificación y número de reseñas', 'Horarios y servicios listados', 'Fotos y respuestas a reseñas', 'Ubicación y datos de contacto'].map(opt => (
                                    <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={businessData.gbpData?.includes(opt)}
                                            onChange={(e) => {
                                                const current = businessData.gbpData || [];
                                                const news = e.target.checked
                                                    ? [...current, opt]
                                                    : current.filter(o => o !== opt);
                                                updateBusinessData({ gbpData: news });
                                            }}
                                            className="w-5 h-5 rounded border-white-10 accent-primary"
                                        />
                                        <span className="text-xs text-muted group-hover:text-white transition-colors">{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Navigation 2026 */}
            <div className="flex justify-between items-center mt-12 py-8 border-t border-white-5">
                <button
                    onClick={() => setStep(s => Math.max(1, s - 1))}
                    className={clsx(
                        "btn-ghost",
                        step === 1 && "opacity-0 pointer-events-none"
                    )}
                >
                    <ChevronLeft size={20} />
                    Anterior
                </button>

                <div className="flex gap-4">
                    {step < 4 ? (
                        <button
                            onClick={() => setStep(s => Math.min(4, s + 1))}
                            className="btn-primary"
                        >
                            Siguiente
                            <ChevronRight size={20} />
                        </button>
                    ) : (
                        <button
                            onClick={() => alert('¡Estructura de Auditoría Blindada!')}
                            className="btn-primary"
                            style={{ background: 'var(--success)', boxShadow: '0 10px 20px -5px rgba(16, 185, 129, 0.3)' }}
                        >
                            <Save size={20} />
                            Guardar Perfil Master
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
