/**
 * Procesador de prompts desde CSV de Manus
 * Clasifica prompts en: EXPLORACIÓN (ChatGPT/Gemini) vs ACCIÓN (Manus)
 */

// Palabras clave que indican prompts de EXPLORACIÓN (investigación, análisis)
const EXPLORATION_KEYWORDS = [
    'busca', 'investiga', 'analiza', 'compara', 'revisa', 'encuentra',
    'qué', 'cuál', 'cómo', 'por qué', 'dame información', 'explica',
    'muestra', 'lista', 'identifica', 'extrae datos', 'recopila',
    'serp', 'búsqueda', 'top 3', 'local pack', 'competencia',
    'ejemplos de', 'mejores prácticas', 'tendencias', 'patrones'
];

// Palabras clave que indican prompts de ACCIÓN (desarrollo, creación)
const ACTION_KEYWORDS = [
    'crea', 'genera', 'implementa', 'desarrolla', 'añade', 'mete',
    'construye', 'haz', 'modifica', 'actualiza', 'optimiza',
    'despliega', 'configura', 'instala', 'código', 'página',
    'componente', 'función', 'archivo', 'web', 'diseño',
    'fix', 'corrige', 'mejora', 'integra', 'conecta'
];

/**
 * Clasifica un prompt en EXPLORACIÓN o ACCIÓN
 */
export function classifyPrompt(promptText) {
    if (!promptText || typeof promptText !== 'string') {
        return 'UNKNOWN';
    }

    const lowerText = promptText.toLowerCase();

    // Contar matches de cada categoría
    const explorationScore = EXPLORATION_KEYWORDS.reduce((score, keyword) => {
        return score + (lowerText.includes(keyword) ? 1 : 0);
    }, 0);

    const actionScore = ACTION_KEYWORDS.reduce((score, keyword) => {
        return score + (lowerText.includes(keyword) ? 1 : 0);
    }, 0);

    // Clasificar según el score más alto
    if (explorationScore > actionScore) {
        return 'EXPLORATION';
    } else if (actionScore > explorationScore) {
        return 'ACTION';
    }

    // Si empate, usar heurísticas adicionales
    if (lowerText.includes('?')) return 'EXPLORATION';
    if (lowerText.match(/\.(jsx|tsx|js|ts|css|html)$/i)) return 'ACTION';

    return 'ACTION'; // Por defecto, asumimos acción
}

/**
 * Parsea el CSV de Manus
 */
export function parseManusCSV(csvText) {
    const lines = csvText.split('\n');
    const prompts = [];

    for (let i = 1; i < lines.length; i++) { // Saltar header
        const line = lines[i];
        if (!line.trim()) continue;

        // El CSV tiene formato: "usuario","avatar","mensaje","fecha",...
        const columns = parseCSVLine(line);

        const user = columns[0] || '';
        const message = columns[2] || '';
        const date = columns[3] || '';

        // Solo procesar mensajes del usuario (Edu Laborda)
        if (user.includes('Edu Laborda') && message.trim().length > 0) {
            const type = classifyPrompt(message);

            prompts.push({
                id: `prompt-${i}`,
                message: message.trim(),
                type,
                date,
                length: message.length,
                // Etiquetas adicionales
                tags: extractTags(message)
            });
        }
    }

    return prompts;
}

/**
 * Parser básico de CSV que maneja comillas
 */
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const nextChar = line[i + 1];

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                current += '"';
                i++; // Skip next quote
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }

    result.push(current);
    return result;
}

/**
 * Extrae tags/categorías del prompt
 */
function extractTags(message) {
    const tags = [];
    const lowerMessage = message.toLowerCase();

    // Categorías técnicas
    if (lowerMessage.match(/seo|schema|meta|sitemap/i)) tags.push('SEO');
    if (lowerMessage.match(/react|component|jsx|tsx/i)) tags.push('React');
    if (lowerMessage.match(/css|diseño|estilo/i)) tags.push('Diseño');
    if (lowerMessage.match(/firebase|vercel|hosting|deploy/i)) tags.push('Deploy');
    if (lowerMessage.match(/dominio|nombre|marca|emd/i)) tags.push('Branding');
    if (lowerMessage.match(/local pack|serp|google/i)) tags.push('Local SEO');

    return tags;
}

/**
 * Agrupa prompts por categoría
 */
export function groupPrompts(prompts) {
    const exploration = prompts.filter(p => p.type === 'EXPLORATION');
    const action = prompts.filter(p => p.type === 'ACTION');

    return {
        exploration: {
            prompts: exploration,
            count: exploration.length,
            avgLength: Math.round(exploration.reduce((sum, p) => sum + p.length, 0) / exploration.length)
        },
        action: {
            prompts: action,
            count: action.length,
            avgLength: Math.round(action.reduce((sum, p) => sum + p.length, 0) / action.length)
        },
        total: prompts.length
    };
}

/**
 * Optimiza un prompt (elimina ruido, mejora claridad)
 */
export function optimizePrompt(message) {
    let optimized = message;

    // Eliminar URLs temporales de Manus
    optimized = optimized.replace(/https:\/\/[^\s]+manusvm\.computer[^\s]*/gi, '[URL_MANUS]');

    // Eliminar referencias a archivos temporales
    optimized = optimized.replace(/\/home\/ubuntu\/[^\s]*/gi, '[ARCHIVO]');

    // Normalizar espacios
    optimized = optimized.replace(/\s+/g, ' ').trim();

    return optimized;
}

/**
 * Genera estadísticas del análisis
 */
export function generateStats(prompts) {
    const grouped = groupPrompts(prompts);
    const tags = {};

    prompts.forEach(p => {
        p.tags.forEach(tag => {
            tags[tag] = (tags[tag] || 0) + 1;
        });
    });

    return {
        total: prompts.length,
        exploration: {
            count: grouped.exploration.count,
            percentage: Math.round((grouped.exploration.count / prompts.length) * 100),
            avgLength: grouped.exploration.avgLength
        },
        action: {
            count: grouped.action.count,
            percentage: Math.round((grouped.action.count / prompts.length) * 100),
            avgLength: grouped.action.avgLength
        },
        topTags: Object.entries(tags)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([tag, count]) => ({ tag, count }))
    };
}
