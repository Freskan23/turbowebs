// Estructura de los slides del webinar
export const WEBINAR_SLIDES = [
    {
        id: 0,
        type: 'intro',
        title: 'Domina el Local Pack 2026',
        subtitle: 'Crea Redes de Webs de Servicios con IA',
        content: 'Bienvenido a la Masterclass. Hoy vamos a transformar el análisis de Manus en una red de webs real, optimizada y lista para captar clientes en minutos.',
        agenda: [
            { icon: '🤖', title: 'Paso 1: Manus', desc: 'Análisis de competencia' },
            { icon: '🏗️', title: 'Paso 2: La Web', desc: 'Montaje de Home y Estructura' },
            { icon: '📍', title: 'Paso 3: Zonas', desc: 'Páginas de Barrios (Locations)' },
            { icon: '🛠️', title: 'Paso 4: Servicios', desc: 'Páginas de Servicio individuales' },
            { icon: '🔗', title: 'Paso 5: Interlinking', desc: 'Estructura SEO de Silos' },
            { icon: '⚡', title: 'Paso 6: PageSpeed', desc: 'Optimización de carga' },
            { icon: '📸', title: 'Paso 7: Fotos Pro', desc: 'Generación con Nano Banana' },
            { icon: '📈', title: 'Paso 8: Estrategia', desc: 'Plan de acción para rankear' }
        ]
    },
    {
        id: 1,
        type: 'prompt',
        category: 'INVESTIGACIÓN',
        categoryColor: '#6366f1',
        title: 'Análisis Inicial con Manus',
        subtitle: 'El "Cerebro" de tu estrategia local',
        objective: 'Extraer los patrones ganadores de las 10 mejores webs de tu competencia en 7 ciudades europeas usando Manus.',
        info: {
            why: "Para superar a los líderes, primero debemos saber exactamente qué están haciendo: qué servicios ofrecen, qué barrios dominan y qué fallos técnicos tienen.",
            goal: "Obtener un reporte detallado de servicios, barrios y auditoría técnica.",
            tip: "Copia este prompt y ejecútalo en Manus. El resultado lo usaremos en el siguiente paso."
        },
        benefits: [
            'Mapeo exhaustivo de servicios ganadores',
            'Identificación de los 10 mejores barrios por ciudad',
            'Auditoría SEO técnica de los Top 3 competidores',
            'Detección de oportunidades de urgencias/24h'
        ],
        useCase: 'Para empresas de servicios que quieren expandirse a nivel europeo.',
        templateKey: 'PROMPT_INICIAL_MANUS',
        icon: '🤖',
        fields: [
            {
                key: 'categoria',
                label: 'Tu Categoría de Negocio',
                placeholder: 'Ej: Pintores, Fontaneros...',
                type: 'text',
                required: true
            }
        ],
        usesManusReport: false
    },
    {
        id: 2,
        type: 'data-input',
        category: 'REPORTE',
        categoryColor: '#10b981',
        title: 'Pegar Reporte de Manus',
        subtitle: 'Vincula los datos del análisis a tu web',
        description: 'Pega el informe completo que te ha generado Manus. Este reporte servirá de "cerebro" para todos los pasos siguientes de construcción.',
        info: {
            why: "Sin los datos de Manus, la IA solo puede inventar. Con el reporte, la IA copiará lo que ya está funcionando en Google.",
            goal: "Tener el contexto de competitividad, servicios y barrios cargado en el sistema.",
            tip: "Copia todo el texto de Manus (desde el título hasta las conclusiones) y pégalo aquí."
        },
        fields: [
            {
                key: 'manusReport',
                label: 'Reporte de Manus *',
                placeholder: 'Pega aquí el análisis de Manus...',
                type: 'textarea',
                required: true
            }
        ],
        outputHint: 'Este reporte es la BASE de todo. Se usará automáticamente en todos los prompts siguientes.'
    },
    {
        id: 3,
        type: 'prompt',
        category: 'CONSTRUCCIÓN',
        categoryColor: '#10b981',
        title: 'Paso 2: ¡MONTAR LA WEB!',
        subtitle: 'Generamos la Home y la Estructura principal',
        objective: 'Basándonos en Manus, vamos a crear el esqueleto REAL de tu Home: Header, Hero, Estructura de Secciones, Metadatos y Schema Markup.',
        info: {
            why: "La Home es tu tarjeta de visita y el centro de tu SEO. Aquí construimos el código base.",
            goal: "Obtener el HTML/CSS de la Home Page y el JSON-LD listo para usar.",
            tip: "Este prompt integra los títulos y metas que Manus identificó como ganadores."
        },
        benefits: [
            'Código HTML completo de la Home Page',
            'JSON-LD LocalBusiness inyectado',
            'Metadatos (Title/Meta) de alta conversión',
            'Menú de navegación estructurado'
        ],
        useCase: 'Usa este código para crear el archivo index.html de tu web.',
        templateKey: 'CONSTRUCCION_HOME_TURBOWEB',
        icon: '🏗️',
        fields: [
            { key: 'nombre', label: 'Nombre del Negocio *', placeholder: 'Ej: Madrid Pintores Pro', type: 'text', required: true },
            { key: 'ciudad', label: 'Ciudad Principal *', placeholder: 'Ej: Madrid', type: 'text', required: true }
        ],
        usesManusReport: true
    },
    {
        id: 4,
        type: 'prompt',
        category: 'CONSTRUCCIÓN',
        categoryColor: '#10b981',
        title: 'Paso 3: Constructor de Zonas',
        subtitle: 'Crea tus Location Pages masivas con un clic',
        objective: 'Generar las páginas de aterrizaje específicas para cada barrio o zona de la ciudad identificada por Manus.',
        info: {
            why: "Para dominar el Local Pack, necesitas ser relevante en cada barrio. Estas páginas captan el tráfico hiper-local.",
            goal: "Obtener el contenido y la estructura para las páginas de barrios (ej: /madrid/chamberi).",
            tip: "Pide a la IA que use los datos de 'Barrios' del reporte de Manus para personalizar cada página."
        },
        benefits: [
            'Estructura masiva de Location Pages',
            'Keywords locales integradas por zona',
            'Interlinking desde la Home a los barrios',
            'Schema markup de área de servicio'
        ],
        useCase: 'Para crear las subpáginas de barrios de tu ciudad.',
        templateKey: 'CONSTRUCTOR_ZONAS_TURBOWEB',
        icon: '📍',
        fields: [
            { key: 'barriosZonas', label: 'Lista de Barrios (separados por coma)', placeholder: 'Chamberí, Salamanca, Retiro...', type: 'text', required: true }
        ],
        usesManusReport: true
    },
    {
        id: 5,
        type: 'prompt',
        category: 'CONSTRUCCIÓN',
        categoryColor: '#10b981',
        title: 'Paso 4: Constructor de Servicios',
        subtitle: 'Vende Servicios como un Líder con IA',
        objective: 'Identificar qué servicios son clave para tu sector y definir cómo debe ser cada página: su estructura de H1-H3, su tipo de contenido y sus elementos de conversión.',
        info: {
            why: "No todos los servicios se venden igual. Aquí definimos cuáles crear y qué debe llevar cada uno (venta vs información).",
            goal: "Obtener un plan maestro de páginas de servicio con su estructura y enfoque de copy.",
            tip: "Usa 'Mejorar con IA' para que OpenAI identifique por ti los servicios estrella del reporte de Manus y te dé la estructura ideal para cada uno."
        },
        benefits: [
            'Plan Maestro de contenidos por cada servicio',
            'Definición de estructura H1, H2 y secciones',
            'Diferenciación de tipos de página (Urgencia/Venta)',
            'Gatillos de conversión específicos por tipo de trabajo'
        ],
        useCase: 'Para saber qué escribir y cómo estructurar cada subpágina de servicio.',
        templateKey: 'CONSTRUCTOR_SERVICIOS_TURBOWEB',
        icon: '🛠️',
        fields: [
            { key: 'serviciosList', label: 'Servicios a Analizar (o deja en blanco para que la IA sugiera)', placeholder: 'Ej: Pintura de oficinas, Alisado de paredes...', type: 'text', required: false }
        ],
        usesManusReport: true
    },
    {
        id: 6,
        type: 'prompt',
        category: 'OPTIMIZACIÓN',
        categoryColor: '#6366f1',
        title: 'Paso 5: Constructor de Silos',
        subtitle: 'Conecta tu Red para dominar el enlazado',
        objective: 'Definir la estructura de enlaces internos entre la Home, los Servicios y los Barrios para pasar autoridad.',
        info: {
            why: "El interlinking es lo que convierte una colección de páginas en una web potente ante Google.",
            goal: "Un mapa de enlazado interno para tu web.",
            tip: "Asegúrate de enlazar siempre desde los servicios hacia los barrios donde se ofrecen."
        },
        benefits: [
            'Mapa de arquitectura de silos',
            'Distribución de Link Juice automática',
            'Mejora en la indexación de páginas secundarias',
            'Experiencia de usuario fluida'
        ],
        useCase: 'Para configurar tus menús y enlaces finales.',
        templateKey: 'CONSTRUCTOR_INTERLINKING_TURBOWEB',
        icon: '🔗',
        usesManusReport: true
    },
    {
        id: 7,
        type: 'prompt',
        category: 'OPTIMIZACIÓN',
        categoryColor: '#6366f1',
        title: 'Paso 6: PageSpeed Máximo',
        subtitle: 'Haz que tu web vuele',
        objective: 'Generar el checklist y las directrices técnicas para conseguir un 100/100 en Lighthouse.',
        info: {
            why: "En el Local Pack, la velocidad es un factor de ranking crítico. Una web lenta no convierte.",
            goal: "Checklist técnico de velocidad y rendimiento.",
            tip: "Prioriza el uso de formatos WebP y la carga diferida (lazy loading)."
        },
        benefits: [
            'Optimización de carga crítica',
            'Checklist de formatos de imagen',
            'Configuración de caché sugerida',
            'Eliminación de JS innecesario'
        ],
        useCase: 'Para cuando ya tienes la web montada (o en vista previa) y quieres la máxima puntuación.',
        templateKey: 'OPTIMIZACION_SPEED',
        icon: '⚡',
        fields: [
            { key: 'pageUrl', label: 'URL a analizar (opcional)', placeholder: 'Ej: https://tu-vista-previa.vercel.app', type: 'text', required: false },
            { key: 'pagespeedData', label: 'Reporte de PageSpeed (pega los fallos detectamos)', placeholder: 'Copia y pega aquí los puntos rojos que te da Google PageSpeed Insights...', type: 'textarea', required: true }
        ],
        usesManusReport: false
    },
    {
        id: 8,
        type: 'prompt',
        category: 'VISUAL',
        categoryColor: '#ec4899',
        title: 'Paso 7: Identidad Visual Completa',
        subtitle: 'Logos, Iconos y Fotos con Nano Banana',
        objective: 'Generar los prompts exactos para crear toda la capa visual de tu marca: desde el Logo y los Iconos personalizados hasta fotos realistas para cada servicio y cada barrio.',
        info: {
            why: "Una web profesional necesita coherencia visual. Aquí creamos el diseño del logo, iconos que encajen con tu marca y fotos únicas para cada ubicación.",
            goal: "Obtener un pack de prompts visuales para generar Logo, Iconos, Fotos de Servicios y Fotos de Barrios.",
            tip: "Pide a la IA que mantenga el mismo estilo artístico en todos los prompts para que la web parezca diseñada por una agencia."
        },
        benefits: [
            'Diseño de Logo profesional y minimalista',
            'Pack de iconos coherentes con el sector',
            'Fotos ultra-realistas para cada página de servicio',
            'Imágenes ambientales por cada barrio/ubicación'
        ],
        useCase: 'Para tener todo el material gráfico antes de subir el contenido final.',
        templateKey: 'PROMPTS_NANO_BANANA',
        icon: '📸',
        usesManusReport: true
    },
    {
        id: 9,
        type: 'prompt',
        category: 'SEO TÉCNICO',
        categoryColor: '#f59e0b',
        title: 'Paso 8: Archivos Especiales SEO',
        subtitle: 'Robots.txt, Sitemap y Schema Pro',
        objective: 'Generar los archivos de configuración técnica (robots.txt, sitemap.xml) y el Schema Markup avanzado para que Google indexe y entienda tu web a la perfección.',
        info: {
            why: "Una web sin estos archivos es invisible para Google. Aquí creamos los 'documentos de identidad' de tu sitio.",
            goal: "Obtener el archivo robots.txt, la estructura del sitemap y el Schema complementario.",
            tip: "Asegúrate de incluir la URL de tu sitemap dentro del archivo robots.txt para facilitar el rastreo."
        },
        benefits: [
            'Archivo robots.txt optimizado para rastreo',
            'Estructura de sitemap.xml recomendada',
            'Schema Markup avanzado (Breadcrumbs, FAQ)',
            'Directivas de indexación seguras'
        ],
        useCase: 'Para el paso final antes de dar por terminada la optimización técnica del sitio.',
        templateKey: 'ARCHIVOS_SEO_ESPECIALES',
        icon: '⚙️',
        usesManusReport: true
    },
    {
        id: 10,
        type: 'intro',
        category: 'ACADEMIA',
        categoryColor: '#8b5cf6',
        title: '¡Apertura Exclusiva: 24 Horas!',
        subtitle: 'Únete a la YinYang Academy y domina la Parte 2',
        objective: 'Lleva tu web al siguiente nivel: mantenimiento móvil, automatización de blog y SEO Local extremo.',
        content: `¡El viaje no termina aquí! Abrimos inscripciones por solo 24 horas en **academy.yinyangseo.com**, la academia Nº1 de SEO Local en español.

**¿QUÉ VEREMOS EN LA PARTE 2?**
• Gestión y mantenimiento de tu TurboWeb desde el móvil.
• Configuración avanzada de Schema y optimización técnica profunda.
• Estrategias de automatización total para tu Blog Local.
• Soporte directo y comunidad de expertos.

No te quedes fuera del Laboratorio. El Top 1 te está esperando.`,
        agenda: [
            { icon: '📱', title: 'Mantenimiento Móvil', desc: 'Gestiona tu negocio sobre la marcha' },
            { icon: '🤖', title: 'Blog Automático', desc: 'Contenido que rankea sin esfuerzo' },
            { icon: '🎓', title: 'Comunidad Pro', desc: 'Soporte de Edu Laborda y los Compas' }
        ],
        buttonText: 'ACCEDER A LA ACADEMIA 🚀',
        buttonLink: 'https://academy.yinyangseo.com/',
        usesManusReport: false
    }
];
