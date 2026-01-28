// Configuración de las páginas/slides del webinar
// Cada slide tiene: título, objetivo, descripción, y el templateKey del prompt

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
            { icon: '🔧', title: 'Auditoría SEO Técnica', desc: 'Diagnóstico completo de tu web' },
            { icon: '⚡', title: 'Crear Location Pages', desc: 'Páginas optimizadas desde cero' },
            { icon: '🎨', title: 'Optimizar Web Existente', desc: 'Mejora sin perder tu identidad' },
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
        icon: '🔍'
    },
    {
        id: 2,
        type: 'prompt',
        category: 'INVESTIGACIÓN',
        categoryColor: '#6366f1',
        title: 'Auditoría SEO Técnica',
        subtitle: 'Diagnóstico completo de tu web actual',
        objective: 'Realizar un análisis técnico exhaustivo para identificar problemas y oportunidades de mejora SEO.',
        benefits: [
            'Detectar errores técnicos que afectan tu posicionamiento',
            'Medir Core Web Vitals y velocidad de carga',
            'Evaluar la optimización on-page actual',
            'Priorizar mejoras por impacto'
        ],
        useCase: 'Fundamental antes de cualquier optimización. Te da el mapa de lo que hay que arreglar.',
        templateKey: 'AUDITORIA_SEO_TECNICA',
        icon: '🔧'
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
        useCase: 'Cuando necesitas crear una página nueva para una ubicación específica de tu negocio.',
        templateKey: 'CREAR_LOCATION_PAGE',
        icon: '⚡'
    },
    {
        id: 4,
        type: 'prompt',
        category: 'DESARROLLO',
        categoryColor: '#10b981',
        title: 'Optimizar Web Existente',
        subtitle: 'Mejora tu web actual con patrones ganadores',
        objective: 'Aplicar todas las mejores prácticas identificadas del Local Pack a tu web existente sin perder tu identidad.',
        benefits: [
            'Mantener tu branding y contenido único',
            'Implementar estructura de los líderes del sector',
            'Añadir elementos faltantes (FAQ, Schema, etc.)',
            'Mejorar sin empezar de cero'
        ],
        useCase: 'Cuando ya tienes una web pero no está rindiendo como debería en búsquedas locales.',
        templateKey: 'OPTIMIZAR_WEB_EXISTENTE',
        icon: '🎨'
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
        icon: '📊'
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
        icon: '🔑'
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
        icon: '⚙️'
    }
];
