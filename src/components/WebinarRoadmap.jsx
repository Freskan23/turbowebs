import React from 'react';
import { useBusiness } from '../context/BusinessContext';
import { CheckCircle2, Circle, PlayCircle, Lock } from 'lucide-react';
import { clsx } from 'clsx';

const modules = [
    { id: 1, title: 'Setup', desc: 'Entorno' },
    { id: 2, title: 'Maestro', desc: 'Estructura' },
    { id: 3, title: 'Variables', desc: 'Config Pro' },
    { id: 4, title: 'Gen', desc: 'Producción' },
    { id: 5, title: 'QA', desc: 'Optimización' },
    { id: 6, title: 'Run', desc: 'Manus-Deploy' }
];

export const WebinarRoadmap = () => {
    const { currentModule, setCurrentModule } = useBusiness();

    return (
        <div className="w-full py-10 px-4 bento-card border-none bg-elevated mb-12">
            <div className="flex justify-between items-start max-w-4xl mx-auto relative px-4 md-px-12">
                {/* Connecting Line */}
                <div className="absolute top-6 left-12 right-12 h-0-5 bg-white-5 -z-10" />

                {modules.map((m, index) => {
                    const isActive = currentModule === m.id;
                    const isCompleted = currentModule > m.id;
                    const isLocked = m.id > 3 && currentModule <= 3;

                    return (
                        <button
                            key={m.id}
                            onClick={() => !isLocked && setCurrentModule(m.id)}
                            className={clsx(
                                "flex flex-col items-center gap-3 transition-all outline-none",
                                isLocked ? "cursor-not-allowed opacity-40" : "hover-scale-110"
                            )}
                        >
                            <div
                                className={clsx(
                                    "w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-500",
                                    isActive ? "border-primary bg-primary shadow-mega" :
                                        isCompleted ? "border-success bg-white-5" : "border-white-5 bg-transparent"
                                )}
                            >
                                {isCompleted ? (
                                    <CheckCircle2 size={22} className="text-success" />
                                ) : isActive ? (
                                    <PlayCircle size={22} className="text-white glow-active" />
                                ) : isLocked ? (
                                    <Lock size={16} className="text-dim" />
                                ) : (
                                    <div className="w-1-5 h-1-5 rounded-full bg-dim" />
                                )}
                            </div>

                            <div className="flex flex-col items-center">
                                <span className={clsx(
                                    "text-xs font-bold tracking-widest leading-none",
                                    isActive ? "text-primary" : "text-dim"
                                )}>
                                    0{m.id}
                                </span>
                                <span className={clsx(
                                    "text-10 font-extrabold uppercase mt-1 hidden md-block",
                                    isActive ? "text-white" : "text-muted"
                                )}>
                                    {m.title}
                                </span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
