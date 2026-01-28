import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import { WHITELIST } from '../constants/whitelist';
import { LogIn, ShieldCheck, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';

export const Login = () => {
    const { setUser } = useBusiness();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const cleanEmail = email.toLowerCase().trim();

        if (WHITELIST.includes(cleanEmail)) {
            setUser(cleanEmail);
            localStorage.setItem('masterclass_user', cleanEmail);
        } else {
            setError('Acceso denegado. Este email no está en la lista del webinar.');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-dark p-6">
            <div className="w-full max-w-md bento-card p-10 flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-3xl bg-primary-10 flex items-center justify-center text-primary shadow-mega">
                    <ShieldCheck size={32} />
                </div>

                <div>
                    <h2 className="text-3xl text-gradient">Webinar Turbo</h2>
                    <p className="text-muted mt-2">Introduce tu email para acceder a la plataforma</p>
                </div>

                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mt-4">
                    <div className="flex flex-col gap-2 text-left">
                        <label className="text-xs text-dim">Email Autorizado</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError('');
                            }}
                            placeholder="ejemplo@correo.com"
                            className={clsx(
                                "modern-input",
                                error ? "border-secondary shadow-[0_0_15px_rgba(244,63,94,0.2)]" : ""
                            )}
                        />
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 text-xs text-secondary font-bold animate-pulse justify-center">
                            <AlertCircle size={14} />
                            {error}
                        </div>
                    )}

                    <button type="submit" className="btn-primary w-full justify-center mt-2 group">
                        <span>Entrar a la Masterclass</span>
                        <LogIn size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <p className="text-xs text-dim mt-4">
                    Solo para alumnos registrados de Edu Laborda
                </p>
            </div>
        </div>
    );
};
