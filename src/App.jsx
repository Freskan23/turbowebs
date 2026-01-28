import React from 'react';
import { useBusiness } from './context/BusinessContext';
import { WebinarRoadmap } from './components/WebinarRoadmap';
import { BusinessWizard } from './components/BusinessWizard';
import { DynamicPromptComposer } from './components/DynamicPromptComposer';
import { Login } from './components/Login';
import { Zap, Eye, Sparkles, Files, Layers, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
    const { currentModule, completion, demoMode, setDemoMode, setCurrentModule, user, setUser } = useBusiness();

    // Persistencia de sesión (Whitelist)
    React.useEffect(() => {
        const savedUser = localStorage.getItem('masterclass_user');
        if (savedUser) setUser(savedUser);
    }, []);

    if (!user) return <Login />;

    return (
        <div className="min-h-screen flex flex-col container">
            {/* Future Header */}
            <header className="py-8 flex justify-between items-center mb-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4"
                >
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-mega">
                        <Zap size={24} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-extrabold tracking-ultra uppercase">Webinar Turbo</h1>
                        <span className="text-xs text-primary font-bold">Manus x SEO Intelligence</span>
                    </div>
                </motion.div>

                <div className="flex items-center gap-8">
                    <div className="hidden md-flex flex-col items-end gap-2">
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-dim">Prompt Readiness</span>
                            <span className="text-sm font-bold text-white">{completion}%</span>
                        </div>
                        <div className="progress-bar-container w-48">
                            <motion.div
                                className="progress-bar-fill"
                                initial={{ width: 0 }}
                                animate={{ width: `${completion}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            localStorage.removeItem('masterclass_user');
                            setUser(null);
                        }}
                        className="p-3 rounded-xl bento-card border-none hover:text-secondary transition-colors"
                        title="Cerrar Sesión"
                    >
                        <LogOut size={20} />
                    </button>

                    <button
                        onClick={() => setDemoMode(!demoMode)}
                        className={`p-3 rounded-xl transition-all ${demoMode ? 'bg-primary text-white shadow-mega' : 'bento-card p-3 border-none'}`}
                    >
                        <Eye size={20} />
                    </button>
                </div>
            </header>

            <main className="flex-1 pb-24">
                <AnimatePresence mode="wait">
                    {!demoMode && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <WebinarRoadmap />
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className={`mt-10 ${demoMode ? 'max-w-4xl mx-auto' : ''}`}>
                    {currentModule === 3 ? (
                        <div className="grid grid-cols-1 gap-10">
                            <motion.section
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bento-card p-10"
                            >
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="p-3 rounded-2xl bg-primary-10 text-primary">
                                        <Sparkles size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl text-gradient">Configuración 2026</h2>
                                        <p className="text-xs text-dim mt-1">Variables Dinámicas de Próxima Generación</p>
                                    </div>
                                </div>
                                <BusinessWizard />
                            </motion.section>

                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bento-card p-10"
                            >
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="p-3 rounded-2xl bg-accent-10 text-accent">
                                        <Files size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl text-gradient">Biblioteca de Prompts Maestros</h2>
                                        <p className="text-xs text-dim mt-1">Optimizados del análisis de proyectos reales</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-8">
                                    <div>
                                        <h3 className="text-sm font-bold text-primary mb-4">🔍 INVESTIGACIÓN Y ANÁLISIS</h3>
                                        <div className="grid grid-cols-1 gap-6">
                                            <DynamicPromptComposer templateKey="ANALISIS_COMPETENCIA_LOCAL" />
                                            <DynamicPromptComposer templateKey="AUDITORIA_SEO_TECNICA" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-bold text-accent mb-4">⚡ DESARROLLO WEB</h3>
                                        <div className="grid grid-cols-1 gap-6">
                                            <DynamicPromptComposer templateKey="CREAR_LOCATION_PAGE" />
                                            <DynamicPromptComposer templateKey="OPTIMIZAR_WEB_EXISTENTE" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-bold text-success mb-4">📊 ESTRATEGIA SEO</h3>
                                        <div className="grid grid-cols-1 gap-6">
                                            <DynamicPromptComposer templateKey="ESTRATEGIA_BASADA_AUDITORIA" />
                                            <DynamicPromptComposer templateKey="KEYWORDS_LOCALES" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-bold text-secondary mb-4">⚙️ AVANZADOS</h3>
                                        <div className="grid grid-cols-1 gap-6">
                                            <DynamicPromptComposer templateKey="CREAR_SISTEMA_COMPONENTES" />
                                        </div>
                                    </div>
                                </div>
                            </motion.section>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bento-card p-12 min-h-400 flex flex-col items-center justify-center text-center"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-white-5 flex items-center justify-center mb-6">
                                <Layers size={32} className="text-dim" />
                            </div>
                            <h2 className="text-4xl text-gradient mb-4">Fase {currentModule}</h2>
                            <p className="text-muted max-w-md text-lg">
                                Esta zona de la plataforma está bloqueada hasta la sesión en directo.
                                Concéntrate en el **Módulo de Variables**.
                            </p>
                            <button
                                onClick={() => setCurrentModule(3)}
                                className="btn-primary mt-10 px-10"
                            >
                                Iniciar Configuración Pro
                            </button>
                        </motion.div>
                    )}
                </div>
            </main>

            <footer className="py-10 border-t border-white-5 mt-auto">
                <div className="flex justify-between items-center text-xs text-dim">
                    <span className="font-bold">© 2026 Edu Laborda | Intelligence Platform v3.0 - Future</span>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Documentation</a>
                        <a href="#" className="hover:text-white transition-colors">Manus Guide</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
