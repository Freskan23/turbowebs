// Diccionario de prompts para el webinar
// Flujo: Manus hace el análisis → Usuario pega el reporte → Estos Prompts se "alimentan" y se pegan de vuelta en Manus

export const PROMPTS = {
    // PASO 1: ANÁLISIS (Este es el primer comando que el usuario mete en Manus)
    PROMPT_INICIAL_MANUS: `MANUS, realiza un ANÁLISIS ESTRATÉGICO Y TÉCNICO EXTREMO para montar una red de webs líderes de {{categoria}} en 7 ciudades europeas: Madrid, Barcelona, París, Berlín, Milán, Ámsterdam y Bruselas.

**INSTRUCCIONES DE EXTRACCIÓN:**
1. **SERVICIOS:** Extrae CADA servicio individual y nicho (long-tail) de los 3 líderes de cada ciudad.
2. **UBICACIONES:** Identifica los 10 barrios/zonas con mayor volumen comercial en cada ciudad.
3. **ARQUITECTURA:** Analiza URLs y elementos de conversión que les funcionan.

**FORMATO:** Tabla de servicios, Top 10 barrios por ciudad y checklist de victoria técnica.`,

    // PASO 2: LA WEB (Este prompt se genera BAJO CADA SLIDE para que el usuario lo pegue en Manus)
    AUDITORIA_SEO_TECNICA: `MANUS, actúa como mi desarrollador web experto en SEO Local. Basándote en el REPORTE DE ANÁLISIS que ya tenemos (ignora fechas y metadatos generales, ve al grano), construye el CÓDIGO de la Home Page para {{nombre}} en {{ciudad}}.

**REPORTE DE REFERENCIA:**
{{manusReport}}

**ENTREGA:**
1. **HTML5/CSS3:** Estructura completa con Header, Hero persuasivo, Secciones de Servicios y Barrios.
2. **SEO ON-PAGE:** Títulos (Title) y Meta Descriptions optimizadas.
3. **SCHEMA MARKUP:** Script JSON-LD de LocalBusiness inyectado con los datos de {{nombre}}.`,

    // PASO 3: ZONAS/BARRIOS
    CREAR_ZONAS_PAGES: `MANUS, genera ahora el contenido para las LOCATION PAGES de {{ciudad}}. Usando la inteligencia del reporte previo, crea las landings para los siguientes barrios comerciales: {{barriosZonas}}.

**REPORTE DE REFERENCIA:**
{{manusReport}}

**REQUISITOS POR PÁGINA:**
- Texto hiper-local (menciona puntos de interés o características del barrio).
- Enfoque de conversión total (CTAs claros).
- Estructura H1-H3 optimizada para [Servicio] en [Barrio].
- Integra los "puntos de dolor" que detectaste en la competencia.`,

    // PASO 4: SERVICIOS
    CREAR_SERVICIOS_PAGES: `MANUS, actúa como mi Director de Estrategia de Contenidos. Basándote en el REPORTE DE REFERENCIA, genera el **PLAN MAESTRO DE PÁGINAS DE SERVICIO** para {{categoria}}.

**TU OBJETIVO:** Definir exactamente qué páginas de servicio individuales debemos crear para dominar el mercado, qué estructura técnica deben tener y qué tipo de contenido debe incluir cada una para convertir.

**SERVICIOS CLAVE A PROCESAR:** {{serviciosList}}

**PARA CADA SERVICIO, ENTREGA:**
1. **ESTRUCTURA DE PÁGINA:** Define los H1, H2 sugeridos y la jerarquía de información.
2. **TIPO DE CONTENIDO:** ¿Es una landing page de venta pura, una guía técnica o una página de urgencias? Especifica el enfoque.
3. **ELEMENTOS DE CONVERSIÓN:** Qué gatillos mentales y CTAs (botones, formularios) son obligatorios según lo que les funciona a los líderes.
4. **VALOR DIFERENCIAL:** Qué debemos incluir para superar lo que Manus vio en la competencia (USPs).

**REPORTE DE REFERENCIA:**
{{manusReport}}

Entrega una hoja de ruta técnica lista para empezar a construir página por página.`,

    // PASO 5: INTERLINKING
    ESTRATEGIA_INTERLINKING: `MANUS, diseña la ARQUITECTURA DE SILOS para esta web. Necesito el mapa de enlazado interno para conectar la Home, los Servicios y los Barrios.

**REPORTE DE REFERENCIA:**
{{manusReport}}

**INDICACIONES:**
- Cómo enlazar desde los Servicios hacia los Barrios (Location Pages).
- Estructura del Menú Principal y del Footer para máxima indexación.
- Distribución de autoridad (Link Juice) desde las páginas más fuertes.`,

    // PASO 6: PAGESPEED
    OPTIMIZACION_SPEED: `MANUS, actúa como mi Especialista Técnico en WPO (Web Performance Optimization). Tengo una web en producción y necesito llegar al 100/100 en Google PageSpeed.

**DATOS DE LA WEB:**
- URL: {{pageUrl}}
- AUDITORÍA PAGESPEED (Fallos detectados):
{{pagespeedData}}

---

**TU TAREA:**
Analiza los errores técnicos pegados arriba y entrégame las **DIRECTIVAS TÉCNICAS EXACTAS** para corregirlos. No me des consejos generales; dime qué cambiar en el código o servidor basándote en esos fallos específicos.

1. **OPTIMIZACIÓN DE CARGA:** Cómo resolver el LCP (Largest Contentful Paint).
2. **ESTABILIDAD VISUAL:** Cómo fijar el CLS (Cumulative Layout Shift).
3. **IMÁGENES Y ASSETS:** Directivas de redimensionamiento y formatos (WebP/AVIF).
4. **CÓDIGO BLOQUEANTE:** Cómo eliminar o diferir el JS/CSS que ralentiza la carga.

Entrega un checklist técnico accionable para el desarrollador.`,

    // PASO 7: FOTOS (NANO BANANA)
    PROMPTS_NANO_BANANA: `MANUS, actúa como mi Director Creativo y Experto en IA Generativa. Basándote en el REPORTE DE REFERENCIA, genera un **PACK COMPLETO DE PROMPTS VISUALES** para crear todos los assets de la web de {{categoria}}.

**TU OBJETIVO:** Crear instrucciones detalladas para Nano Banana o Midjourney que aseguren una estética coherente, premium y profesional en toda la web.

**PARA LOGO E ICONOS:**
1. **LOGO:** Prompt para un logo minimalista y moderno de {{categoria}}. Especifica estilo (ej: flat, vecto), colores de marca y composición.
2. **ICONOS:** Pack de 5 prompts para iconos de servicio (ej: herramientas, check de calidad, reloj 24h) con el mismo estilo que el logo.

**PARA FOTOS DE SERVICIOS (Landing Pages):**
3. **FOTOS DE OBRA:** 3 prompts para imágenes ultra-realistas de trabajos de {{categoria}} terminados. Busca realismo extremo, buena iluminación y sensación de limpieza.

**PARA FOTOS DE UBICACIÓN (Location Pages):**
4. **FOTOS POR BARRIO:** Genera la "fórmula de prompt" para crear fotos que representen el servicio de {{categoria}} actuando en diferentes zonas de la ciudad. Por ejemplo: "Una furgoneta de {{categoria}} aparcada en una calle emblemática de {{ciudad}} con estética de atardecer".

**REPORTE DE REFERENCIA:**
{{manusReport}}

Entrega los prompts técnicos listos para ser pegados en el generador de imágenes.`,

    // PASO 8: ESTRATEGIA FINAL
    ESTRATEGIA_BASADA_AUDITORIA: `MANUS, resume todo en un PLAN DE ACCIÓN DE 30 DÍAS para dominar el Top 3 en {{ciudad}} con este nuevo sitio de {{categoria}}.

**REPORTE DE REFERENCIA:**
{{manusReport}}

**CALENDARIO:**
- Semana 1: Lanzamiento e Indexación.
- Semana 2: Autoridad Local (GMB y Reseñas).
- Semana 3: Expansión de Barrios.
- Semana 4: Linkbuilding Local.`,

    // Compatibilidad
    EXTRAER_SERVICIOS_Y_BARRIOS: `MANUS, extrae una TABLA DE ARQUITECTURA (Sitemap) para {{ciudad}}. Lista cada Servicio y Barrio con su Slug de URL sugerido.`,
};
