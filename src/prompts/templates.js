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

    // PASO 2: CONSTRUCCIÓN (Generador de Landing Page de Alta Conversión)
    CONSTRUCCION_HOME_TURBOWEB: `MANUS, actúa como mi Senior Web Developer y Experto en CRO (Conversion Rate Optimization). Tu misión es CONSTRUIR la Home Page definitiva para {{nombre}} en {{ciudad}}, usando la inteligencia del REPORTE DE ANÁLISIS.

**FILOSOFÍA TURBOWEB:**
- **Móvil-First:** Diseño pensado para el pulgar y carga instantánea.
- **Copywriting Persuasivo:** No solo listes servicios; vende soluciones a los problemas detectados en el reporte.
- **Arquitectura de Silos:** Prepara la base para escalar a cientos de barrios.

**REPORTE DE REFERENCIA (Úsalo para el contenido y USPs):**
{{manusReport}}

**ENTREGA:**
1. **HTML5 PROFESIONAL (Cuerpo completo):** Hero con CTA magnético, Sección de "Por qué nosotros" (basada en debilidades de la competencia), Cuadrícula de Servicios Principales, Mapa de Barrios y Footer legal/SEO.
2. **CSS3 TURBO:** Estilos modernos, limpios y optimizados para velocidad (sin frameworks pesados).
3. **SEO & SCHEMA PRO:** Title y Meta Description de alto CTR + Script JSON-LD completo de LocalBusiness con servicios integrados.

Transforma los datos en una máquina de captar clientes.`,

    // PASO 3: ZONAS/BARRIOS (Constructor Masivo de Location Pages)
    CONSTRUCTOR_ZONAS_TURBOWEB: `MANUS, actúa como mi Especialista en SEO Local y Copywriter de Proximidad. Tu misión es CONSTRUIR el contenido para las LOCATION PAGES de {{ciudad}}. 

Para cada barrio comercial listado: {{barriosZonas}}, genera un entregable listo para publicar.

**REPORTE DE REFERENCIA (ADN de la ciudad):**
{{manusReport}}

**REQUISITOS POR CADA PÁGINA DE BARRIO:**
1. **HEADING (H1):** Optimizado para "[Servicio] en [Nombre del Barrio]".
2. **COPY HIPER-LOCAL:** Incluye referencias a lugares emblemáticos, distritos colindantes o "vibras" de la zona para que Google la vea como única.
3. **CONVERSIÓN TURBO:** Integra CTAs de urgencia y botones de llamada específicos para esa ubicación.
4. **BLOQUE DE CONFIANZA:** Basado en los puntos de dolor que viste en la competencia regional, escribe un párrafo que resuelva por qué somos la mejor opción en ese barrio concreto.

Genera el contenido estructurado de forma que se pueda copiar y pegar directamente en la web.`,

    // PASO 4: SERVICIOS (Constructor Maestro de Páginas de Servicio)
    CONSTRUCTOR_SERVICIOS_TURBOWEB: `MANUS, actúa como mi Director de Estrategia de Contenidos y Experto en Ventas. Tu misión es CONSTRUIR el esqueleto y el copy profesional para las PÁGINAS DE SERVICIO de la web.

Para cada servicio: {{serviciosList}}, genera el contenido optimizado siguiendo la inteligencia del REPORTE DE REFERENCIA.

**REQUISITOS POR SERVICIO:**
1. **JERARQUÍA H1-H3:** Títulos magnéticos que ataquen el beneficio directo y la keyword principal.
2. **PROPUESTA DE VALOR (USPs):** Usa lo que detectaste de los líderes de otras ciudades para escribir una sección de "Por qué este servicio con nosotros es diferente".
3. **CONTENIDO DE CONVERSIÓN:** Escribe el copy para 3 secciones clave: Beneficios Rápidos, Cómo lo hacemos y Pregunta de Cierre (CTA).
4. **SCHEMA SERVICE:** Genera el script JSON-LD de Service detallado con los datos extraídos del sector.

**REPORTE DE REFERENCIA:**
{{manusReport}}

Entrega el contenido listo para ser estructurado en la web, con un tono profesional y directo al grano.`,

    // PASO 5: INTERLINKING (Constructor de Arquitectura de Silos)
    CONSTRUCTOR_INTERLINKING_TURBOWEB: `MANUS, actúa como mi Arquitecto SEO y Experto en Link Building Interno. Tu misión es CONSTRUIR el mapa de ARQUITECTURA DE SILOS definitivo para esta web.

**OBJETIVO:** Conectar la Home, los Servicios y los Barrios (Locations) para que la autoridad fluya perfectamente y Google indexe toda la red de forma masiva.

**ENTREGABLE DE CONSTRUCCIÓN:**
1. **MAPA DE ENLAZADO (Servicios -> Barrios):** Define cómo debe cada página de servicio enlazar a sus barrios correspondientes (ej: "Pintores Pro en Madrid" enlazando a "Pintores en Chamberí"). Genera el listado de anchor text sugeridos.
2. **ESTRUCTURA DE MENÚ PRINCIPAL:** Diseña el menú superior para que sea limpio, móvil-friendly y potente para SEO.
3. **FOOTER MAESTRO (FAT FOOTER):** Crea la estructura del footer para agrupar todos los barrios y servicios por zonas, facilitando el rastreo de Googlebot.
4. **DISTRIBUCIÓN DE LINK JUICE:** Explica la estrategia para pasar autoridad desde las páginas con más tráfico/fuerza hacia las nuevas location pages de barrios.

**REPORTE DE REFERENCIA:**
{{manusReport}}

Convierte la teoría en un plan de montaje real para los menús y enlaces de la web.`,

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

    // PASO 8: ARCHIVOS SEO
    ARCHIVOS_SEO_ESPECIALES: `MANUS, actúa como mi Experto en SEO Técnico y Arquitectura de Rastreo. Basándote en el REPORTE DE REFERENCIA, genera la "Carpintería Final" de mi web para que Google la adore.

**TU TAREA ES GENERAR:**

1. **ROBOTS.TXT:** Un archivo optimizado que permita el rastreo de servicios y barrios, bloquee lo irrelevante e indique la ruta del sitemap.
2. **SITEMAP.XML:** La lista de rutas (URLs) que Manus propuso en el paso de arquitectura, formateadas para ser rastreadas.
3. **PRE-ENTREGA DE SCHEMA AVANZADO:** Genera el código JSON-LD complementario para:
   - **Breadcrumbs:** Ruta de navegación (Home > Ciudad > Barrio).
   - **FAQ Schema:** Basado en las 3 preguntas más comunes que Manus detectó en los blogs líderes.
   - **LocalBusiness extendido:** Con horarios y áreas de servicio específicas por zonas.

**REPORTE DE REFERENCIA:**
{{manusReport}}

Entrega el código de cada archivo por separado y listo para copiar en la raíz del hosting.`,

    // Compatibilidad
    EXTRAER_SERVICIOS_Y_BARRIOS: `MANUS, extrae una TABLA DE ARQUITECTURA (Sitemap) para {{ciudad}}. Lista cada Servicio y Barrio con su Slug de URL sugerido.`,
};
