// PROMPTS MAESTROS OPTIMIZADOS para crear webs desde cero
// Flujo: Manus hace el análisis → Usuario pega el reporte → Prompts trabajan con esos datos

export const PROMPTS = {
    // ===== 0. PROMPT INICIAL PARA MANUS ===== //
    PROMPT_INICIAL_MANUS: `Realiza un ANÁLISIS COMPLETO del Local Pack de Google para empresas de {{categoria}} en 7 ciudades europeas principales:

**CIUDADES A ANALIZAR:**
1. Madrid, España
2. Barcelona, España
3. París, Francia
4. Berlín, Alemania
5. Milán, Italia
6. Ámsterdam, Holanda
7. Bruselas, Bélgica

**BÚSQUEDAS POR CIUDAD:**
- "{{categoria}} [Ciudad]"
- "{{categoria}} 24h [Ciudad]"
- "{{categoria}} urgencia [Ciudad]"

**DATOS A EXTRAER DEL LOCAL PACK (Top 3 por ciudad):**

1. **Google Business Profile:**
   - Calificación y número de reseñas
   - Horarios de operación
   - Servicios ofrecidos
   - Datos de contacto

2. **Auditoría de Menú y Servicios (Scraping de Web):**
   - Extrae los elementos del MENÚ DE NAVEGACIÓN principal.
   - Lista detallada de los SERVICIOS detectados en la web.
   - Verifica si tienen BLOG o sección de noticias.
   - Si tienen blog, extrae los TITULARES de los últimos 5-10 posts para entender su estrategia de contenidos.

3. **Auditoría SEO Técnica de las webs:**

**FORMATO DE ENTREGA:**
- Tabla comparativa por ciudad
- Resumen de PATRONES COMUNES en el Top 3
- DEBILIDADES técnicas encontradas
- OPORTUNIDADES sin explotar
- Recomendaciones para superar a la competencia`,

    // ===== 1. AUDITORÍA TÉCNICA (basada en reporte Manus) ===== //

    AUDITORIA_SEO_TECNICA: `🔧 AUDITORÍA SEO TÉCNICA - BLUEPRINT PARA NUESTRA WEB

**SECTOR:** {{categoria}}
**CIUDAD OBJETIVO:** {{ciudad}}

---

## ANÁLISIS DE COMPETENCIA (Reporte Manus)

{{manusReport}}

---

## TU TAREA

Analiza el reporte de Manus y genera un **BLUEPRINT TÉCNICO COMPLETO** para crear nuestra web de {{categoria}} en {{ciudad}}.

### 1. EXTRAE LOS PATRONES GANADORES

Del reporte identifica y lista:
- **Calificaciones TOP** (empresas con 4.8+ estrellas) y qué las hace destacar
- **Volumen de reseñas** óptimo para competir
- **Horarios/disponibilidad** que ofrecen (especialmente 24h si aplica)
- **Servicios diferenciadores** que mencionan
- **Deficiencias SEO técnicas** encontradas en la auditoría (títulos cortos, falta de meta descriptions, alt text, etc.)

### 2. GENERA ESTRUCTURA HTML GANADORA

Basándote en las mejores prácticas del reporte:

**Title Tag (50-60 caracteres):**
- Propón 3 opciones de title optimizado para {{categoria}} {{ciudad}}
- Incluye la keyword principal + diferenciador + ciudad

**Meta Description (120-160 caracteres):**
- Propón 3 opciones que incluyan: servicio, ciudad, diferenciador, CTA
- Usa números si es posible (años de experiencia, % satisfacción, etc.)

**Estructura de Encabezados:**
- H1 único y optimizado
- H2s para secciones principales (basadas en patrones del análisis)
- H3s para subsecciones

### 3. SCHEMA MARKUP COMPLETO

Genera el JSON-LD listo para copiar:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  // ... completa con datos de {{categoria}} en {{ciudad}}
}
\`\`\`

Incluye también:
- Service schema para cada servicio principal
- FAQ schema (mínimo 5 preguntas basadas en lo que buscan los usuarios)
- BreadcrumbList

### 4. CHECKLIST DE IMPLEMENTACIÓN

Basándote en las **debilidades encontradas** en el reporte, crea un checklist de:

**SEO Técnico (Obligatorio):**
☐ HTTPS activo
☐ Title optimizado (50-60 chars)
☐ Meta description (120-160 chars)
☐ H1 único con keyword principal
☐ Alt text en 100% de imágenes
☐ Canonical tag
☐ Robots.txt
☐ Sitemap.xml

**Seguridad (Importante):**
☐ X-Frame-Options
☐ X-Content-Type-Options
☐ Strict-Transport-Security
☐ Content-Security-Policy

**Contenido (Diferenciador):**
☐ Mínimo 500 palabras por página
☐ Secciones de servicios detalladas
☐ FAQ con schema
☐ Testimonios/casos de éxito

### 5. VENTAJAS COMPETITIVAS

Basándote en el análisis, identifica:
- **Oportunidades no explotadas** (ej: servicios 24h, urgencias)
- **Diferenciadores posibles** vs competencia
- **Contenido que falta** en el mercado

**FORMATO DE ENTREGA:**
Todo el contenido debe ser COPIABLE y USABLE directamente. Código JSON-LD completo, titles y descriptions listos, estructura HTML clara.`,

    // ===== 2. CREAR LOCATION PAGE ===== //

    CREAR_LOCATION_PAGE: `⚡ CREAR LOCATION PAGE - CÓDIGO COMPLETO

## DATOS DEL NEGOCIO

| Campo | Valor |
|-------|-------|
| **Negocio** | {{nombre}} |
| **Servicio** | {{categoria}} |
| **Ciudad** | {{ciudad}} |
| **Zonas** | {{barriosZonas}} |
| **Teléfono** | {{telefono}} |
| **Email** | {{email}} |

---

## ANÁLISIS DE COMPETENCIA (Reporte Manus)

{{manusReport}}

---

## TU TAREA

Usando el análisis de Manus, crea el **CÓDIGO HTML COMPLETO** de una Location Page para {{nombre}} que supere a la competencia.

### PASO 1: ANALIZA EL REPORTE

Del reporte de Manus, identifica:
1. **Estructura de las webs TOP** (secciones que incluyen)
2. **Servicios más mencionados** (para incluir en nuestra web)
3. **Diferenciadores de los líderes** (calificaciones altas, reseñas, 24h)
4. **Debilidades a evitar** (títulos cortos, falta de contenido, etc.)
5. **Oportunidades sin explotar** (servicios de urgencia, horarios extendidos)

### PASO 2: GENERA EL HTML COMPLETO

Crea el código HTML con estas secciones (basadas en los patrones ganadores):

\`\`\`html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[GENERA TITLE OPTIMIZADO 50-60 chars]</title>
    <meta name="description" content="[GENERA META DESC 120-160 chars]">
    <!-- Schema JSON-LD -->
    <script type="application/ld+json">
    [INCLUYE LOCALUSINESS SCHEMA COMPLETO]
    </script>
</head>
<body>
    <!-- HERO: Teléfono destacado, CTA principal -->
    <!-- SERVICIOS: Grid basado en servicios del análisis -->
    <!-- POR QUÉ NOSOTROS: Diferenciadores vs competencia -->
    <!-- CTA URGENCIAS: Si el análisis muestra demanda -->
    <!-- ZONAS: {{barriosZonas}} -->
    <!-- PRECIOS: Tabla orientativa -->
    <!-- FAQ: 8 preguntas basadas en búsquedas del sector -->
    <!-- CONTACTO: Formulario + NAP -->
    <!-- FOOTER: Legal + contacto -->
</body>
</html>
\`\`\`

### PASO 3: CONTENIDO ESPECÍFICO

Para cada sección, genera:

**HERO:**
- H1 optimizado para "{{categoria}} {{ciudad}}"
- Subtítulo con propuesta de valor (basada en diferenciadores del análisis)
- Teléfono: {{telefono}} (grande y clicable)
- 2 CTAs: WhatsApp + Presupuesto

**SERVICIOS (mínimo 6):**
Basándote en los servicios identificados en el reporte, genera un grid con:
- Icono descriptivo
- Título del servicio
- Descripción breve (2-3 líneas)
- Link a página de servicio

**POR QUÉ ELEGIRNOS (4 razones):**
Crea diferenciadores que superen a la competencia analizada:
- Años de experiencia
- Garantías específicas
- Disponibilidad (24h si aplica según análisis)
- Certificaciones

**FAQ (8 preguntas):**
Genera preguntas basadas en:
- Búsquedas del sector identificadas
- Precios y presupuestos
- Tiempos de respuesta
- Garantías
- Zonas de servicio

Incluye el FAQ Schema para rich snippets.

**DATOS NAP:**
- Nombre: {{nombre}}
- Teléfono: {{telefono}}
- Email: {{email}}
- Ciudad: {{ciudad}}
- Zonas: {{barriosZonas}}

### FORMATO DE ENTREGA

1. **HTML completo** listo para copiar
2. **CSS inline o en <style>** para estilos básicos
3. **Schema JSON-LD** completo dentro del HTML
4. **Textos reales** (no placeholders) basados en el análisis`,

    // ===== 3. REFERENCIAS DE DISEÑO ===== //

    OPTIMIZAR_WEB_EXISTENTE: `🎨 DEFINIR ESTILO VISUAL DE LA WEB

**REFERENCIAS DE DISEÑO:**
{{referenceUrls}}

**PREFERENCIA DE COLORES:**
{{colorPreference}}

**ESTILO DESEADO:**
{{styleNotes}}

**CONTEXTO - REPORTE DE MANUS:**
{{manusReport}}

---

**OBJETIVO:**
Definir el estilo visual completo para nuestra nueva web, combinando:
1. Las referencias visuales proporcionadas
2. Los patrones de diseño ganadores del reporte de Manus
3. Las preferencias de colores y estilo indicadas

**DEFINIR:**

**1. PALETA DE COLORES**
- Color principal (CTAs, destacados)
- Color secundario
- Color de fondo
- Color de texto
- Colores de acento

**2. TIPOGRAFÍA**
- Fuente para títulos
- Fuente para cuerpo
- Tamaños recomendados
- Pesos (bold, regular, light)

**3. ESPACIADO**
- Padding de secciones
- Márgenes entre elementos
- Anchura máxima del contenido

**4. COMPONENTES VISUALES**
- Estilo de botones (redondeados, cuadrados)
- Estilo de tarjetas
- Iconografía (línea, sólido, etc.)
- Sombras y efectos

**5. LAYOUT**
- Estructura del header
- Organización de secciones
- Estilo del footer

**ENTREGA:**
- Guía de estilo completa
- Variables CSS definidas
- Ejemplos de componentes estilizados`,

    // ===== 4. ESTRATEGIA SEO ===== //

    ESTRATEGIA_BASADA_AUDITORIA: `📊 ESTRATEGIA SEO COMPLETA

**NEGOCIO:** {{nombre}}
**UBICACIÓN:** {{ciudad}}

**CONTEXTO - REPORTE DE MANUS:**
{{manusReport}}

---

**OBJETIVO:**
Diseñar la estrategia SEO completa para nuestra nueva web, basándonos en los patrones ganadores identificados en el reporte de Manus.

**1. ARQUITECTURA WEB**
- Páginas a crear (basado en competencia analizada)
- Estructura de menú
- Jerarquía de contenidos
- URLs optimizadas

**2. CONTENIDO PRIORITARIO**
- Página principal (Location Page)
- Páginas de servicios individuales
- Página "Sobre Nosotros"
- Páginas de zonas/barrios

**3. SEO ON-PAGE**
- Template de titles por tipo de página
- Template de meta descriptions
- Estructura H1-H6 estándar
- Densidad de keywords

**4. SEO LOCAL**
- Configuración Google Business Profile
- Estrategia NAP consistency
- Directorios locales prioritarios
- Plan de reseñas

**5. CONTENIDO MENSUAL**
- Blog posts recomendados
- FAQs a añadir
- Actualizaciones de servicios

**6. LINK BUILDING**
- Directorios del sector
- Colaboraciones locales
- Estrategia de menciones

**ENTREGA:**
- Plan de acción por semanas
- Checklist de implementación
- KPIs a medir`,

    // ===== 5. KEYWORDS ===== //

    KEYWORDS_LOCALES: `🔑 INVESTIGACIÓN DE KEYWORDS LOCALES

**SECTOR:** {{categoria}}
**CIUDAD:** {{ciudad}}
**ZONAS/BARRIOS:** {{barriosZonas}}

**CONTEXTO - REPORTE DE MANUS:**
{{manusReport}}

---

**OBJETIVO:**
Identificar TODAS las keywords que debemos atacar en nuestra nueva web, basándonos en lo que funciona para los competidores analizados.

**TIPOS DE KEYWORDS:**

**1. KEYWORDS PRINCIPALES**
- {{categoria}} {{ciudad}}
- {{categoria}} {{ciudad}} 24 horas
- {{categoria}} urgente {{ciudad}}
- {{categoria}} económico {{ciudad}}

**2. KEYWORDS POR SERVICIO**
(Basadas en los servicios identificados en el reporte)
- [cada servicio] {{ciudad}}
- [cada servicio] precio {{ciudad}}
- [cada servicio] urgente {{ciudad}}

**3. KEYWORDS POR ZONA**
- {{categoria}} [barrio]
- {{categoria}} cerca de [zona]
- {{categoria}} [código postal]

**4. KEYWORDS LONG-TAIL**
- cuánto cuesta {{categoria}} en {{ciudad}}
- {{categoria}} 24 horas {{ciudad}} precio
- mejor {{categoria}} de {{ciudad}}
- {{categoria}} de confianza {{ciudad}}

**5. KEYWORDS INFORMACIONALES (para blog)**
- cómo elegir un {{categoria}}
- qué hacer si necesitas {{categoria}}
- precio medio de {{categoria}} en {{ciudad}}

**PARA CADA KEYWORD INDICAR:**
- Volumen de búsqueda estimado
- Dificultad (alta/media/baja)
- Intención (transaccional/informacional)
- Página donde atacarla

**ENTREGA:**
- Lista completa de keywords
- Agrupación por página/sección
- Priorización por oportunidad`,

    // ===== 6. COMPONENTES ===== //

    CREAR_SISTEMA_COMPONENTES: `⚙️ SISTEMA DE COMPONENTES REUTILIZABLES

**CONTEXTO - REPORTE DE MANUS:**
{{manusReport}}

---

**OBJETIVO:**
Crear componentes HTML/CSS modulares basados en los patrones ganadores del reporte de Manus.

**COMPONENTES A CREAR:**

**1. HERO SECTION**
- Con imagen de fondo
- Con teléfono destacado
- Con formulario inline
- Responsive mobile

**2. GRID DE SERVICIOS**
- 2, 3 o 4 columnas
- Icono + título + descripción
- Hover effects
- Links a páginas

**3. SECCIÓN "POR QUÉ NOSOTROS"**
- 4 items con iconos
- Layout horizontal en desktop
- Vertical en mobile

**4. CTA DE URGENCIAS**
- Fondo de color
- Teléfono grande
- Texto persuasivo
- Animación sutil

**5. FAQ ACORDEÓN**
- Expandible/colapsable
- Schema FAQ incluido
- Iconos +/-

**6. FORMULARIO DE CONTACTO**
- Campos: nombre, teléfono, mensaje
- Validación básica
- Estilo consistente

**7. FOOTER COMPLETO**
- Logo y descripción
- Links rápidos
- Contacto
- Legal

**8. BOTÓN WHATSAPP FLOTANTE**
- Fijo en esquina
- Animación de entrada
- Link con mensaje predefinido

**REQUISITOS:**
- HTML5 semántico
- CSS con variables (colores, fuentes)
- Mobile-first
- Comentarios explicativos
- Fácil de customizar

**ENTREGA:**
- Código HTML de cada componente
- CSS con variables configurables
- Instrucciones de uso`,

};
