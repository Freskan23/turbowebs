// Configuración de OpenAI
// La API key se obtiene de localStorage (configurada por el usuario en la app)

export function getOpenAIConfig() {
    const apiKey = localStorage.getItem('openai_api_key') || '';
    return {
        apiKey,
        model: 'gpt-4o-mini',
        temperature: 0.7,
        maxTokens: 2000
    };
}

/**
 * Guarda la API key en localStorage
 */
export function saveAPIKey(apiKey) {
    localStorage.setItem('openai_api_key', apiKey);
}

/**
 * Obtiene la API key guardada
 */
export function getAPIKey() {
    return localStorage.getItem('openai_api_key') || '';
}

/**
 * Verifica si hay una API key configurada
 */
export function hasAPIKey() {
    const key = localStorage.getItem('openai_api_key');
    return key && key.trim().length > 0;
}

/**
 * Mejora un prompt usando OpenAI
 * @param {string} basePrompt - Prompt base con variables ya reemplazadas
 * @param {object} additionalData - Datos adicionales del usuario (análisis previos, etc.)
 * @returns {Promise<string>} - Prompt mejorado
 */
export async function improvePromptWithAI(basePrompt, additionalData = {}) {
    const config = getOpenAIConfig();

    if (!config.apiKey) {
        throw new Error('API key de OpenAI no configurada. Ve a Configuración para añadirla.');
    }

    try {
        const systemPrompt = `Eres un experto en optimización de prompts para IA. Tu tarea es mejorar prompts para desarrollo web y SEO local.

INSTRUCCIONES:
- Mantén la estructura y formato del prompt original
- Integra los datos adicionales del usuario de forma natural
- Haz el prompt más específico y accionable
- Mantén las variables {{variable}} intactas
- Si hay resultados de análisis de competencia, úsalos para añadir contexto específico
- Mantén el tono profesional y directo
- NO añadas información inventada, solo reorganiza y mejora lo existente`;

        const userPrompt = `PROMPT BASE:
${basePrompt}

${Object.keys(additionalData).length > 0 ? `DATOS ADICIONALES DEL USUARIO:\n${Object.entries(additionalData).map(([key, value]) => `${key}:\n${value}`).join('\n\n')}` : ''}

Mejora este prompt integrando los datos adicionales de forma natural. Devuelve SOLO el prompt mejorado, sin explicaciones adicionales.`;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.apiKey}`
            },
            body: JSON.stringify({
                model: config.model,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt }
                ],
                temperature: config.temperature,
                max_tokens: config.maxTokens
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'Error al llamar a OpenAI');
        }

        const data = await response.json();
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error mejorando prompt con OpenAI:', error);
        throw error;
    }
}

/**
 * Extrae campos de datos adicionales que un prompt podría necesitar
 * @param {string} templateKey - Key del template del prompt
 * @returns {Array<{label: string, key: string, placeholder: string}>}
 */
export function getAdditionalFieldsForPrompt(templateKey) {
    const fields = {
        'ANALISIS_COMPETENCIA_LOCAL': [
            {
                label: 'Resultados previos de búsqueda',
                key: 'searchResults',
                placeholder: 'Pega aquí las URLs y snippets del Local Pack que encontraste...',
                multiline: true
            },
            {
                label: 'Notas sobre patrones observados',
                key: 'observedPatterns',
                placeholder: 'Ej: "Todos usan números de teléfono grandes en el hero", "5 de 7 tienen chat en vivo"',
                multiline: true
            }
        ],
        'AUDITORIA_SEO_TECNICA': [
            {
                label: 'Problemas ya identificados',
                key: 'knownIssues',
                placeholder: 'Ej: "Lighthouse score: 65", "Falta schema markup", "Imágenes sin optimizar"',
                multiline: true
            },
            {
                label: 'Objetivos específicos',
                key: 'goals',
                placeholder: 'Ej: "Alcanzar score 90+ en Core Web Vitals", "Indexar 50 páginas nuevas"',
                multiline: true
            }
        ],
        'CREAR_LOCATION_PAGE': [
            {
                label: 'Análisis de competencia (pegar informe)',
                key: 'competitorAnalysis',
                placeholder: 'Pega aquí el resultado del análisis de competencia local...',
                multiline: true
            },
            {
                label: 'Servicios específicos a destacar',
                key: 'keyServices',
                placeholder: 'Ej: "Apertura urgente, Cambio de cerradura, Copia de llaves, Cerrajero 24h"',
                multiline: false
            },
            {
                label: 'Datos del negocio (Teléfono, horario, etc.)',
                key: 'businessInfo',
                placeholder: 'Teléfono: 900 123 456\nHorario: 24/7\nDirección: Calle Principal 123',
                multiline: true
            }
        ],
        'OPTIMIZAR_WEB_EXISTENTE': [
            {
                label: 'Resultado de auditoría (pegar informe)',
                key: 'auditReport',
                placeholder: 'Pega aquí los hallazgos del análisis técnico SEO...',
                multiline: true
            },
            {
                label: 'Prioridades de optimización',
                key: 'priorities',
                placeholder: 'Ej: "1. Mejorar velocidad móvil, 2. Añadir schema, 3. Expandir FAQ"',
                multiline: true
            }
        ],
        'ESTRATEGIA_BASADA_AUDITORIA': [
            {
                label: 'Hallazgos clave de la auditoría',
                key: 'auditFindings',
                placeholder: 'Pega aquí el resumen de la auditoría técnica...',
                multiline: true
            },
            {
                label: 'Presupuesto y timeline',
                key: 'budgetTimeline',
                placeholder: 'Ej: "3 meses, 2000€/mes, objetivo: +50% tráfico orgánico local"',
                multiline: false
            }
        ],
        'KEYWORDS_LOCALES': [
            {
                label: 'Keywords iniciales ya identificadas',
                key: 'seedKeywords',
                placeholder: 'Ej: "cerrajero madrid, cerrajero 24h madrid, cambio cerradura madrid"',
                multiline: true
            }
        ],
        'CREAR_SISTEMA_COMPONENTES': [
            {
                label: 'Requisitos de diseño específicos',
                key: 'designRequirements',
                placeholder: 'Ej: "Usar Tailwind CSS", "Soporte IE11 no necesario", "Animaciones mínimas"',
                multiline: true
            }
        ]
    };

    return fields[templateKey] || [];
}
