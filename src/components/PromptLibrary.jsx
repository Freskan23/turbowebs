import React, { useState } from 'react';
import { Upload, FileText, Zap, Database, Download, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { parseManusCSV, groupPrompts, generateStats, optimizePrompt } from '../utils/promptProcessor';

export function PromptLibrary() {
    const [csvData, setCsvData] = useState(null);
    const [prompts, setPrompts] = useState(null);
    const [stats, setStats] = useState(null);
    const [filter, setFilter] = useState('all'); // 'all' | 'exploration' | 'action'
    const [copiedId, setCopiedId] = useState(null);

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const text = await file.text();
        setCsvData(text);

        // Procesar CSV
        const parsedPrompts = parseManusCSV(text);
        setPrompts(parsedPrompts);
        setStats(generateStats(parsedPrompts));
    };

    const filteredPrompts = prompts ?
        filter === 'all' ? prompts :
            prompts.filter(p => p.type === filter.toUpperCase()) :
        [];

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(optimizePrompt(text));
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const exportPrompts = () => {
        const grouped = groupPrompts(prompts);
        const markdown = `# Biblioteca de Prompts Manus

## 📊 Estadísticas

- **Total de prompts**: ${stats.total}
- **Exploración (ChatGPT/Gemini)**: ${stats.exploration.count} (${stats.exploration.percentage}%)
- **Acción (Manus)**: ${stats.action.count} (${stats.action.percentage}%)

## 🔍 Prompts de Exploración

${grouped.exploration.prompts.map((p, i) => `### ${i + 1}. ${p.tags.join(', ') || 'General'}

\`\`\`
${optimizePrompt(p.message)}
\`\`\`

---
`).join('\n')}

## ⚡ Prompts de Acción

${grouped.action.prompts.map((p, i) => `### ${i + 1}. ${p.tags.join(', ') || 'General'}

\`\`\`
${optimizePrompt(p.message)}
\`\`\`

---
`).join('\n')}
`;

        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'biblioteca-prompts-manus.md';
        a.click();
    };

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h1 className="text-5xl font-extrabold text-gradient mb-4">
                    📚 Biblioteca de Prompts
                </h1>
                <p className="text-muted text-lg">
                    Analiza tu historial de Manus y separa prompts de <span className="text-primary font-bold">exploración</span> (ChatGPT/Gemini) vs <span className="text-accent font-bold">acción</span> (Manus)
                </p>
            </motion.div>

            {/* Upload Area */}
            {!prompts && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bento-card p-12 text-center mb-12"
                >
                    <Upload size={64} className="mx-auto text-primary mb-6" />
                    <h2 className="text-2xl font-bold mb-4">Sube tu archivo CSV de Manus</h2>
                    <p className="text-muted mb-8">
                        El archivo se procesará localmente en tu navegador, sin subirlo a ningún servidor
                    </p>

                    <label className="btn-primary inline-flex items-center gap-3 cursor-pointer">
                        <FileText size={20} />
                        Seleccionar archivo CSV
                        <input
                            type="file"
                            accept=".csv"
                            onChange={handleFileUpload}
                            className="hidden"
                        />
                    </label>
                </motion.div>
            )}

            {/* Stats Dashboard */}
            {stats && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                >
                    <div className="bento-card p-8 text-center">
                        <Database size={40} className="mx-auto text-dim mb-4" />
                        <div className="text-5xl font-extrabold text-gradient mb-2">
                            {stats.total}
                        </div>
                        <div className="text-muted font-semibold">Prompts Totales</div>
                    </div>

                    <div className="bento-card p-8 text-center border-2 border-primary">
                        <Zap size={40} className="mx-auto text-primary mb-4" />
                        <div className="text-5xl font-extrabold text-primary mb-2">
                            {stats.exploration.count}
                        </div>
                        <div className="text-sm text-muted font-semibold mb-2">
                            Exploración ({stats.exploration.percentage}%)
                        </div>
                        <div className="text-xs text-dim">
                            Usa ChatGPT/Gemini
                        </div>
                    </div>

                    <div className="bento-card p-8 text-center border-2 border-accent">
                        <FileText size={40} className="mx-auto text-accent mb-4" />
                        <div className="text-5xl font-extrabold text-accent mb-2">
                            {stats.action.count}
                        </div>
                        <div className="text-sm text-muted font-semibold mb-2">
                            Acción ({stats.action.percentage}%)
                        </div>
                        <div className="text-xs text-dim">
                            Usa Manus
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Filters */}
            {prompts && (
                <div className="flex gap-4 mb-8 justify-center flex-wrap">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all ${filter === 'all'
                                ? 'bg-white-10 text-white shadow-mega'
                                : 'bg-white-5 text-dim hover:bg-white-10'
                            }`}
                    >
                        Todos ({prompts.length})
                    </button>
                    <button
                        onClick={() => setFilter('exploration')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all ${filter === 'exploration'
                                ? 'bg-primary text-white shadow-mega'
                                : 'bg-white-5 text-dim hover:bg-white-10'
                            }`}
                    >
                        <Zap size={18} className="inline mr-2" />
                        Exploración ({stats.exploration.count})
                    </button>
                    <button
                        onClick={() => setFilter('action')}
                        className={`px-6 py-3 rounded-xl font-bold transition-all ${filter === 'action'
                                ? 'bg-accent text-white shadow-mega'
                                : 'bg-white-5 text-dim hover:bg-white-10'
                            }`}
                    >
                        <FileText size={18} className="inline mr-2" />
                        Acción ({stats.action.count})
                    </button>

                    <button
                        onClick={exportPrompts}
                        className="px-6 py-3 rounded-xl font-bold bg-success text-white hover:shadow-mega transition-all ml-auto"
                    >
                        <Download size={18} className="inline mr-2" />
                        Exportar Markdown
                    </button>
                </div>
            )}

            {/* Prompts List */}
            {filteredPrompts && filteredPrompts.length > 0 && (
                <div className="grid gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredPrompts.map((prompt, index) => (
                            <motion.div
                                key={prompt.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: index * 0.02 }}
                                className={`bento-card p-6 ${prompt.type === 'EXPLORATION'
                                        ? 'border-l-4 border-primary'
                                        : 'border-l-4 border-accent'
                                    }`}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        {prompt.type === 'EXPLORATION' ? (
                                            <div className="p-2 rounded-lg bg-primary bg-opacity-20">
                                                <Zap size={20} className="text-primary" />
                                            </div>
                                        ) : (
                                            <div className="p-2 rounded-lg bg-accent bg-opacity-20">
                                                <FileText size={20} className="text-accent" />
                                            </div>
                                        )}
                                        <div>
                                            <div className="font-bold text-sm">
                                                {prompt.type === 'EXPLORATION' ? '🔍 Exploración' : '⚡ Acción'}
                                            </div>
                                            <div className="text-xs text-dim">
                                                {prompt.tags.join(' · ') || 'General'}
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => copyToClipboard(prompt.message, prompt.id)}
                                        className="p-2 rounded-lg bg-white-5 hover:bg-white-10 transition-colors"
                                        title="Copiar prompt"
                                    >
                                        {copiedId === prompt.id ? (
                                            <Check size={18} className="text-success" />
                                        ) : (
                                            <Copy size={18} className="text-dim" />
                                        )}
                                    </button>
                                </div>

                                {/* Message */}
                                <div className="bg-elevated rounded-lg p-4 font-mono text-sm leading-relaxed">
                                    {optimizePrompt(prompt.message)}
                                </div>

                                {/* Meta */}
                                <div className="flex items-center gap-4 mt-4 text-xs text-dim">
                                    <span>{prompt.length} caracteres</span>
                                    <span>·</span>
                                    <span>{prompt.date}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}

            {/* Empty State */}
            {filteredPrompts && filteredPrompts.length === 0 && (
                <div className="bento-card p-12 text-center">
                    <div className="text-dim mb-4">
                        <FileText size={64} className="mx-auto opacity-30" />
                    </div>
                    <p className="text-muted">
                        No hay prompts en esta categoría
                    </p>
                </div>
            )}
        </div>
    );
}
