import React from 'react';
import { X, CircleHelp } from 'lucide-react';

export const InfoModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '2rem',
            backdropFilter: 'blur(8px)'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: '#16161e',
                borderRadius: '1.5rem',
                width: '100%',
                maxWidth: '500px',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
            }} onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.25rem',
                        right: '1.25rem',
                        background: 'none',
                        border: 'none',
                        color: '#666',
                        cursor: 'pointer',
                        padding: '0.25rem'
                    }}
                >
                    <X size={20} />
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#6366f1'
                    }}>
                        <CircleHelp size={20} />
                    </div>
                    <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#fff' }}>{title}</h2>
                </div>
                <div style={{ color: '#aaa', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    {content}
                </div>
                <button
                    onClick={onClose}
                    style={{
                        marginTop: '2rem',
                        width: '100%',
                        padding: '1rem',
                        backgroundColor: '#6366f1',
                        border: 'none',
                        borderRadius: '0.75rem',
                        color: '#fff',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                    Entendido
                </button>
            </div>
        </div>
    );
};

export const HelpButton = ({ onClick, style = {} }) => (
    <button
        onClick={onClick}
        title="Ver guía de este paso"
        style={{
            padding: '0.6rem',
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            ...style
        }}
        onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
        }}
        onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
        }}
    >
        <CircleHelp size={18} />
    </button>
);
