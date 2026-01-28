// Configuración de las páginas/slides del webinar
// Cada slide tiene campos requeridos específicos para su prompt
// FLUJO: Manus hace el análisis → Usuario pega el reporte → Prompts trabajan con esos datos

export const WEBINAR_SLIDES = [
    {
        id: 0,
        type: 'intro',
        category: 'BIENVENIDA',
        categoryColor: '#6366f1',
        title: 'TurboWebs 2026',
        subtitle: 'Domina el SEO Local con IA',
        author: 'Por Edu Laborda',
        agenda: [
            { icon: '🤖', title: 'Paso 1: Prompt Manus', desc: 'Prepara el análisis inicial' },
            { icon: '📋', title: 'Paso 2: Pegar Reporte', desc: 'Usa los datos de competencia' },
            { icon: '🔧', title: 'Paso 3: Auditoría SEO', desc: 'Diagnóstico técnico' },
            { icon: '⚡', title: 'Paso 4: Crear Web', desc: 'Páginas optimizadas' },
            { icon: '🎨', title: 'Paso 5: Diseño', desc: 'Estilo y referencias' },
            { icon: '📊', title: 'Paso 6: Estrategia', desc: 'Plan de acción' },
            { icon: '🔑', title: 'Paso 7: Keywords', desc: 'Oportunidades locales' },
            { icon: '⚙️', title: 'Paso 8: Componentes', desc: 'Sistema escalable' }
        ]
    },
    {
        id: 1,
        type: 'manus-prompt',
        category: 'PASO 1',
        categoryColor: '#8b5cf6',
        title: 'Prompt para Manus',
        subtitle: 'Copia este prompt y ejecútalo en Manus',
        icon: '🤖',
        description: 'Primero necesitas que Manus analice la competencia. Copia el prompt de abajo para que Manus escrapee los MENÚS de servicios y los BLOGS de los mejores competidores en 7 ciudades.',
        templateKey: 'PROMPT_INICIAL_MANUS',
        fields: [
            {
                key: 'categoria',
                label: 'Sector / Categoría',
                placeholder: 'Ej: Pintores, Cerrajeros, Fontaneros...',
                type: 'text',
                required: true
            }
        ],
        outputHint: 'Copia el prompt generado, ejecútalo en Manus, y luego pasa a la siguiente página para pegar el resultado.'
    },
    {
        id: 2,
        type: 'data-input',
        category: 'PASO 2',
        categoryColor: '#10b981',
        title: 'Resultado de Manus',
        subtitle: 'Pega aquí el análisis que generó Manus',
        icon: '📋',
        description: 'Pega el reporte completo que Manus generó con el prompt anterior. Este análisis será la BASE para todos los prompts siguientes.',
        instructions: [
            'Ejecuta el prompt del paso anterior en Manus',
            'Espera a que complete el análisis',
            'Copia TODO el resultado',
            'Pégalo en el campo de abajo'
        ],
        fields: [
            {
                key: 'manusReport',
                label: 'Reporte completo de Manus',
                placeholder: 'Pega aquí todo el análisis de competencia que generó Manus...\n\nDebe incluir:\n- Análisis por ciudad (Madrid, Barcelona, París...)\n- Datos del Local Pack\n- Auditoría SEO técnica\n- Patrones comunes\n- Recomendaciones',
                type: 'textarea',
                required: true,
                large: true
            }
        ],
        outputHint: 'Este reporte es la BASE de todo. Se usará automáticamente en todos los prompts siguientes.'
    },
    {
        id: 3,
        type: 'prompt',
        category: 'INVESTIGACIÓN',
        categoryColor: '#6366f1',
        title: 'Auditoría SEO Técnica',
        subtitle: 'Extrae los detalles técnicos de los competidores',
        objective: 'A partir del reporte de Manus, profundizar en los aspectos técnicos SEO para replicar exactamente lo que funciona.',
        benefits: [
            'Ver qué schema markup usan los líderes',
            'Analizar estructura de URLs y arquitectura',
            'Identificar Core Web Vitals de referencia',
            'Descubrir estrategias de internal linking'
        ],
        useCase: 'Para entender el "cómo" técnico de las webs que ya rankean.',
        templateKey: 'AUDITORIA_SEO_TECNICA',
        icon: '🔧',
        fields: [
            {
                key: 'ciudad',
                label: 'Ciudad principal para tu negocio',
                placeholder: 'Ej: Majadahonda',
                type: 'text',
                required: true
            }
        ],
        usesManusReport: true
    },
    {
        id: 4,
        type: 'prompt',
        category: 'DESARROLLO',
        categoryColor: '#10b981',
        title: 'Crear Location Page',
        subtitle: 'Página de localización optimizada desde cero',
        objective: 'Crear una página de localización completa aplicando todas las mejores prácticas identificadas en el reporte de Manus.',
        benefits: [
            'Estructura probada que funciona en el Local Pack',
            'Todos los elementos de conversión necesarios',
            'Schema markup completo para rich snippets',
            'Diseño mobile-first optimizado'
        ],
        useCase: 'Para crear la página principal de tu negocio local desde cero.',
        templateKey: 'CREAR_LOCATION_PAGE',
        icon: '⚡',
        fields: [
            {
                key: 'nombre',
                label: 'Nombre del negocio',
                placeholder: 'Ej: Cerrajería Aguado',
                type: 'text',
                required: true
            },
            {
                key: 'ciudad',
                label: 'Ciudad',
                placeholder: 'Ej: Majadahonda',
                type: 'text',
                required: true
            },
            {
                key: 'barriosZonas',
                label: 'Barrios / Zonas de servicio',
                placeholder: 'Ej: Las Rozas, Boadilla, Pozuelo...',
                type: 'text',
                required: false
            },
            {
                key: 'telefono',
                label: 'Teléfono principal',
                placeholder: 'Ej: 614 040 443',
                type: 'text',
                required: false
            },
            {
                key: 'email',
                label: 'Email de contacto',
                placeholder: 'Ej: info@cerrajeriamajadahonda.com',
                type: 'text',
                required: false
            }
        ],
        usesManusReport: true
    },
    {
        id: 5,
        type: 'prompt',
        category: 'DESARROLLO',
        categoryColor: '#10b981',
        title: 'Referencias de Diseño',
        subtitle: 'Define el estilo visual con webs de ejemplo',
        objective: 'Comunicar a la IA el estilo de diseño que quieres, combinando referencias visuales con los patrones ganadores del reporte de Manus.',
        benefits: [
            'Definir paleta de colores y estilo',
            'Mostrar ejemplos de layouts que te gustan',
            'Especificar elementos visuales deseados',
            'Obtener código CSS coherente con tu visión'
        ],
        useCase: 'Para que la IA entienda qué tipo de diseño quieres para tu web.',
        templateKey: 'OPTIMIZAR_WEB_EXISTENTE',
        icon: '🎨',
        fields: [
            {
                key: 'referenceUrls',
                label: 'URLs de webs que te gustan (estilo visual)',
                placeholder: 'Ej: https://ejemplo1.com, https://ejemplo2.com',
                type: 'text',
                required: false
            },
            {
                key: 'colorPreference',
                label: 'Preferencia de colores',
                placeholder: 'Ej: Rojo granate corporativo, Azul profesional...',
                type: 'text',
                required: false
            },
            {
                key: 'styleNotes',
                label: 'Notas sobre el estilo',
                placeholder: 'Ej: Minimalista, Moderno, Con hero grande y teléfono visible...',
                type: 'text',
                required: false
            }
        ],
        usesManusReport: true
    },
    {
        id: 6,
        type: 'prompt',
        category: 'ESTRATEGIA',
        categoryColor: '#f59e0b',
        title: 'Estrategia SEO Completa',
        subtitle: 'Plan de acción basado en los datos de Manus',
        objective: 'Diseñar una estrategia SEO local específica usando los patrones ganadores identificados en el reporte de Manus.',
        benefits: [
            'Roadmap claro con prioridades definidas',
            'KPIs medibles y alcanzables',
            'Plan de contenidos mensual',
            'Estrategia de link building local'
        ],
        useCase: 'Para tener un plan a 3-6 meses con acciones concretas y medibles.',
        templateKey: 'ESTRATEGIA_BASADA_AUDITORIA',
        icon: '📊',
        fields: [
            {
                key: 'nombre',
                label: 'Nombre del negocio',
                placeholder: 'Ej: Cerrajería Aguado',
                type: 'text',
                required: true
            },
            {
                key: 'ciudad',
                label: 'Ciudad principal',
                placeholder: 'Ej: Majadahonda',
                type: 'text',
                required: true
            }
        ],
        usesManusReport: true
    },
    {
        id: 7,
        type: 'prompt',
        category: 'ESTRATEGIA',
        categoryColor: '#f59e0b',
        title: 'Keywords Locales',
        subtitle: 'Investigación de palabras clave con intención local',
        objective: 'Identificar todas las oportunidades de keywords locales basándose en lo que funcionó en el análisis de Manus.',
        benefits: [
            'Keywords long-tail de baja competencia',
            'Términos por barrio y zona',
            'Preguntas para featured snippets',
            'Priorización por volumen e intención'
        ],
        useCase: 'Para saber exactamente qué busca tu cliente potencial y cómo lo busca.',
        templateKey: 'KEYWORDS_LOCALES',
        icon: '🔑',
        fields: [
            {
                key: 'ciudad',
                label: 'Ciudad principal',
                placeholder: 'Ej: Majadahonda',
                type: 'text',
                required: true
            },
            {
                key: 'barriosZonas',
                label: 'Barrios / Zonas',
                placeholder: 'Ej: Las Rozas, Boadilla, Pozuelo...',
                type: 'text',
                required: false
            }
        ],
        usesManusReport: true
    },
    {
        id: 8,
        type: 'prompt',
        category: 'AVANZADO',
        categoryColor: '#ec4899',
        title: 'Sistema de Componentes',
        subtitle: 'Librería reutilizable para location pages',
        objective: 'Crear un sistema de componentes HTML/CSS reutilizables basados en los patrones ganadores del reporte de Manus.',
        benefits: [
            'Componentes plug-and-play',
            'Consistencia en todas las páginas',
            'Fácil de mantener y actualizar',
            'Escalable para múltiples ubicaciones'
        ],
        useCase: 'Cuando gestionas múltiples ubicaciones o clientes y necesitas escalar.',
        templateKey: 'CREAR_SISTEMA_COMPONENTES',
        icon: '⚙️',
        fields: [],
        usesManusReport: true
    }
];
