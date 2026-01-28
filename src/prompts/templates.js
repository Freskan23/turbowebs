// PROMPTS MAESTROS OPTIMIZADOS para crear webs desde cero
// Flujo: Manus hace el análisis → Usuario pega el reporte → Prompts trabajan con esos datos

export const PROMPTS = {
    // ===== 1. AUDITORÍA TÉCNICA (basada en reporte Manus) ===== //

    AUDITORIA_SEO_TECNICA: `🔧 AUDITORÍA SEO TÉCNICA - PROFUNDIZACIÓN

**SECTOR:** {{categoria}}
**CIUDAD OBJETIVO:** {{ciudad}}

**CONTEXTO - REPORTE DE MANUS:**
{{manusReport}}

---

**OBJETIVO:**
A partir del análisis de competencia realizado por Manus, extraer los detalles técnicos SEO específicos para crear nuestra web.

**PROFUNDIZAR EN:**

**1. ESTRUCTURA HTML GANADORA**
- Etiqueta title óptima (basada en patrones del reporte)
- Meta description efectiva
- Estructura H1, H2, H3 que funciona
- URLs optimizadas

**2. SCHEMA MARKUP RECOMENDADO**
- LocalBusiness completo
- Service schemas
- FAQ schema
- BreadcrumbList
- Ejemplo JSON-LD listo para usar

**3. ELEMENTOS DE CONVERSIÓN**
- CTAs que mejor convierten (según el análisis)
- Ubicación óptima del teléfono
- Formularios: qué campos incluir
- WhatsApp: implementación recomendada

**4. ARQUITECTURA DE CONTENIDO**
- Secciones obligatorias
- Orden recomendado
- Longitud de contenido por sección

**ENTREGA:**
- Checklist técnico para nuestra web
- Código schema JSON-LD listo para copiar
- Template de estructura HTML`,

    // ===== 2. CREAR LOCATION PAGE ===== //

    CREAR_LOCATION_PAGE: `⚡ CREAR LOCATION PAGE DESDE CERO

**NEGOCIO:** {{nombre}}
**SERVICIO:** {{categoria}}
**UBICACIÓN:** {{ciudad}}
**BARRIOS/ZONAS:** {{barriosZonas}}
**TELÉFONO:** {{telefono}}
**EMAIL:** {{email}}

**CONTEXTO - REPORTE DE MANUS:**
{{manusReport}}

---

**OBJETIVO:**
Crear una página de localización NUEVA desde cero que replique exactamente la estructura ganadora identificada en el reporte de Manus.

**ESTRUCTURA A CREAR (basada en patrones ganadores):**

📍 **1. HERO SECTION**
- H1: "{{categoria}} en {{ciudad}} - Servicio 24 Horas"
- Subtítulo con propuesta de valor única
- Teléfono GRANDE y clicable: {{telefono}}
- Botón WhatsApp
- Botón "Solicitar Presupuesto"

🛠️ **2. SERVICIOS**
- Grid de servicios principales (mínimo 6)
- Icono + Título + Descripción breve
- Cada servicio enlaza a su página

✨ **3. POR QUÉ ELEGIRNOS**
- 4 razones con iconos
- Datos concretos: años experiencia, trabajos realizados
- Certificaciones o garantías

🚨 **4. CTA URGENCIAS**
- Fondo de color destacado
- "¿Urgencia? Llámanos AHORA"
- Teléfono muy grande: {{telefono}}
- "Llegamos en 30 minutos"

📍 **5. ZONAS DE SERVICIO**
- Listado de barrios: {{barriosZonas}}
- Texto: "Damos servicio en toda {{ciudad}} y alrededores"

💰 **6. PRECIOS**
- Tabla con precios orientativos
- "Presupuesto sin compromiso"
- "Sin cargos ocultos"

❓ **7. FAQ**
- Mínimo 8 preguntas frecuentes
- Expandibles/acordeón
- Preguntas tipo: precio, tiempo, garantía

📞 **8. CONTACTO**
- Formulario simple (Nombre, Teléfono, Mensaje)
- NAP completo
- Email: {{email}}
- Horario de atención
- Mapa de Google (opcional)

⚖️ **9. FOOTER**
- Links a páginas legales
- Repetir teléfono: {{telefono}} y email: {{email}}
- Redes sociales si hay

**REQUISITOS TÉCNICOS:**
- HTML5 semántico
- Mobile-first responsive
- Schema LocalBusiness JSON-LD
- Velocidad optimizada
- CTAs con colores que contrasten`,

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
