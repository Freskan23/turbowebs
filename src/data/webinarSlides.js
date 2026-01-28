// Configuración de las páginas/slides del webinar
// Cada slide tiene campos requeridos específicos para su prompt

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
            { icon: '🔍', title: 'Análisis de Competencia', desc: 'Espía a los líderes del Local Pack' },
            { icon: '🔧', title: 'Auditoría SEO Técnica', desc: 'Diagnóstico de webs competidoras' },
            { icon: '⚡', title: 'Crear Location Pages', desc: 'Páginas optimizadas desde cero' },
            { icon: '🎨', title: 'Diseño y Referencias', desc: 'Define el estilo visual' },
            { icon: '📊', title: 'Estrategia SEO', desc: 'Plan de acción con KPIs' },
            { icon: '🔑', title: 'Keywords Locales', desc: 'Encuentra oportunidades ocultas' },
            { icon: '⚙️', title: 'Sistema de Componentes', desc: 'Escala con templates reutilizables' }
        ]
    },
    {
        id: 1,
        type: 'prompt',
        category: 'INVESTIGACIÓN',
        categoryColor: '#6366f1',
        title: 'Análisis de Competencia Local',
        subtitle: 'Descubre qué hacen los mejores del Local Pack',
        objective: 'Analizar las webs que dominan el Top 3 del Local Pack en 7 ciudades europeas para extraer patrones ganadores.',
        benefits: [
            'Identificar la estructura de contenido que Google premia',
            'Descubrir los elementos comunes en webs exitosas',
            'Obtener un blueprint replicable para tu negocio',
            'Ahorrar meses de prueba y error'
        ],
        useCase: 'Ideal para iniciar cualquier proyecto de SEO local. Es el primer paso antes de crear o mejorar tu web.',
        templateKey: 'ANALISIS_COMPETENCIA_LOCAL',
        icon: '🔍',
        fields: [
            {
                key: 'categoria',
                label: 'Categoría / Sector',
                placeholder: 'Ej: Cerrajeros, Fontaneros, Dentistas...',
                type: 'text',
                required: true
            }
        ],
        outputHint: 'El resultado de este análisis es la BASE de todo. Lo usarás en todos los siguientes prompts.'
    },
    {
        id: 2,
        type: 'prompt',
        category: 'INVESTIGACIÓN',
        categoryColor: '#6366f1',
        title: 'Auditoría SEO Técnica',
        subtitle: 'Analiza la estructura técnica de los competidores',
        objective: 'Extraer los detalles técnicos SEO de las webs competidoras para replicar lo que funciona.',
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
                key: 'categoria',
                label: 'Sector',
                placeholder: 'Ej: Cerrajeros',
                type: 'text',
                required: true
            },
            {
                key: 'ciudad',
                label: 'Ciudad principal',
                placeholder: 'Ej: Madrid',
                type: 'text',
                required: true
            }
        ],
        aiEnhanceFields: [
            {
                key: 'competitorAnalysis',
                label: 'Pega el resultado del Análisis de Competencia (Prompt 1)',
                placeholder: 'Copia y pega el informe generado del análisis de competencia...',
                type: 'textarea'
            }
        ]
    },
    {
        id: 3,
        type: 'prompt',
        category: 'DESARROLLO',
        categoryColor: '#10b981',
        title: 'Crear Location Page',
        subtitle: 'Página de localización optimizada desde cero',
        objective: 'Crear una página de localización completa que combine las mejores prácticas SEO detectadas en el análisis de competencia.',
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
                placeholder: 'Ej: Cerrajeros Express Madrid',
                type: 'text',
                required: true
            },
            {
                key: 'categoria',
                label: 'Servicio principal',
                placeholder: 'Ej: Cerrajería',
                type: 'text',
                required: true
            },
            {
                key: 'ciudad',
                label: 'Ciudad',
                placeholder: 'Ej: Madrid',
                type: 'text',
                required: true
            },
            {
                key: 'barriosZonas',
                label: 'Barrios / Zonas de servicio',
                placeholder: 'Ej: Centro, Chamberí, Salamanca, Retiro...',
                type: 'text',
                required: false
            }
        ],
        aiEnhanceFields: [
            {
                key: 'competitorAnalysis',
                label: 'Pega el Análisis de Competencia',
                placeholder: 'El informe del Prompt 1 - esto es CLAVE para crear la estructura ganadora...',
                type: 'textarea'
            }
        ]
    },
    {
        id: 4,
        type: 'prompt',
        category: 'DESARROLLO',
        categoryColor: '#10b981',
        title: 'Referencias de Diseño',
        subtitle: 'Define el estilo visual con webs de ejemplo',
        objective: 'Comunicar a la IA el estilo de diseño que quieres basándote en webs que te gustan.',
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
                placeholder: 'Ej: Azul profesional, Verde confianza, Naranja urgencia...',
                type: 'text',
                required: false
            },
            {
                key: 'styleNotes',
                label: 'Notas sobre el estilo',
                placeholder: 'Ej: Minimalista, Moderno, Con mucho espacio en blanco...',
                type: 'text',
                required: false
            }
        ],
        aiEnhanceFields: [
            {
                key: 'competitorAnalysis',
                label: 'Pega el Análisis de Competencia',
                placeholder: 'Para combinar las mejores prácticas con tu estilo deseado...',
                type: 'textarea'
            },
            {
                key: 'designNotes',
                label: 'Describe qué te gusta de las webs de referencia',
                placeholder: 'Ej: "De ejemplo1.com me gusta el hero con teléfono grande. De ejemplo2.com el grid de servicios..."',
                type: 'textarea'
            }
        ]
    },
    {
        id: 5,
        type: 'prompt',
        category: 'ESTRATEGIA',
        categoryColor: '#f59e0b',
        title: 'Estrategia SEO Completa',
        subtitle: 'Plan de acción basado en datos reales',
        objective: 'Diseñar una estrategia SEO local específica usando la estructura ganadora identificada en el análisis.',
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
                placeholder: 'Ej: Cerrajeros Express',
                type: 'text',
                required: true
            },
            {
                key: 'ciudad',
                label: 'Ciudad principal',
                placeholder: 'Ej: Madrid',
                type: 'text',
                required: true
            }
        ],
        aiEnhanceFields: [
            {
                key: 'competitorAnalysis',
                label: 'Pega el Análisis de Competencia',
                placeholder: 'La base de la estrategia...',
                type: 'textarea'
            }
        ]
    },
    {
        id: 6,
        type: 'prompt',
        category: 'ESTRATEGIA',
        categoryColor: '#f59e0b',
        title: 'Keywords Locales',
        subtitle: 'Investigación de palabras clave con intención local',
        objective: 'Identificar todas las oportunidades de keywords con intención local y transaccional para tu negocio.',
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
                key: 'categoria',
                label: 'Sector / Industria',
                placeholder: 'Ej: Cerrajería',
                type: 'text',
                required: true
            },
            {
                key: 'ciudad',
                label: 'Ciudad principal',
                placeholder: 'Ej: Madrid',
                type: 'text',
                required: true
            },
            {
                key: 'barriosZonas',
                label: 'Barrios / Zonas',
                placeholder: 'Ej: Centro, Chamberí, Salamanca...',
                type: 'text',
                required: false
            }
        ],
        aiEnhanceFields: [
            {
                key: 'competitorAnalysis',
                label: 'Pega el Análisis de Competencia',
                placeholder: 'Ayuda a identificar keywords que usan los líderes...',
                type: 'textarea'
            }
        ]
    },
    {
        id: 7,
        type: 'prompt',
        category: 'AVANZADO',
        categoryColor: '#ec4899',
        title: 'Sistema de Componentes',
        subtitle: 'Librería reutilizable para location pages',
        objective: 'Crear un sistema de componentes HTML/CSS reutilizables para generar location pages rápidamente.',
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
        aiEnhanceFields: [
            {
                key: 'competitorAnalysis',
                label: 'Pega el Análisis de Competencia',
                placeholder: 'Para crear componentes basados en patrones ganadores...',
                type: 'textarea'
            }
        ]
    }
];
