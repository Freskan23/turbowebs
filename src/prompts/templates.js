// PROMPTS MAESTROS OPTIMIZADOS - Extraídos del análisis de CSV de Manus
// Estos prompts han sido probados y refinados en proyectos reales

export const PROMPTS = {
    // ===== INVESTIGACIÓN Y ANÁLISIS ===== //

    ANALISIS_COMPETENCIA_LOCAL: `🔍 ANÁLISIS DE COMPETENCIA LOCAL - TOP LOCAL PACK

OBJETIVO: Analizar el Local Pack (Top 3 positiones orgánicas) en 7 ciudades europeas principales para el sector {{categoria}}.

**CIUDADES A ANALIZAR:**
1. Madrid, España
2. Barcelona, España  
3. París, Francia
4. Berlín, Alemania
5. Milán, Italia
6. Ámsterdam, Holanda
7. Bruselas, Bélgica

**BÚSQUEDAS LOCALES POR CIUDAD:**
- "{{categoria}} [Ciudad]"
- "{{categoria}} 24h [Ciudad]"  
- "{{categoria}} urgencia [Ciudad]"

**DATOS A EXTRAER POR WEB:**
✅ Encabezados (H1, H2, H3) - Estructura jerárquica
✅ Organización del menú - Secciones y subsecciones
✅ Diseño visual - Colores, tipografía, espaciado
✅ Estructura de contenido - Bloques y orden
✅ CTAs y elementos de conversión - Ubicación y texto
✅ Datos de contacto - NAP (Name, Address, Phone)
✅ Schema markup - Tipos implementados
✅ Internal linking - Estrategia de enlaces

**FORMATO DE ENTREGA:**
- Tabla comparativa en Excel/Google Sheets
- Identificar **patrones comunes** en las 3 primeras de cada ciudad
- Listar **diferencias destacadas**
- Resumen de mejores prácticas detectadas`,

    AUDITORIA_SEO_TECNICA: `🔧 AUDITORÍA SEO TÉCNICA COMPLETA

**SITIO A ANALIZAR:** {{url}}
**SECTOR:** {{categoria}}
**UBICACIÓN:** {{ciudad}}

**ALCANCE TÉCNICO:**
{{seoScope}}

**PROFUNDIDAD REQUERIDA:**
{{analysisDepth}}

**1. ON-PAGE SEO**
- Title tag y meta description
- Estructura de encabezados (H1-H6)
- URLs y arquitectura de información
- Optimización de imágenes (alt, formato, peso)
- Schema Markup implementado
- Datos estructurados (JSON-LD)

**2. RENDIMIENTO**
- Core Web Vitals (LCP, FID, CLS)
- Velocidad de carga (móvil y desktop)
- Impacto de scripts pesados
- Optimización de recursos

**3. INDEXABILIDAD**
- Robots.txt
- Sitemap.xml
- Canonical tags
- Directivas noindex/nofollow

**4. MÓVIL**
- Responsive design
- Usabilidad táctil
- Velocidad en dispositivos móviles

**5. LOCAL SEO (si aplica)**
- Google Business Profile
- NAP consistency
- Schema LocalBusiness
- Reviews y ratings

**ENTREGA:**
- Informe en {{deliveryFormat}}
- Priorización por impacto (Alta/Media/Baja)
- Recomendaciones accionables`,

    // ===== DESARROLLO WEB ===== //

    CREAR_LOCATION_PAGE: `⚡ CREAR LOCATION PAGE OPTIMIZADA

**NEGOCIO:** {{nombre}}
**SERVICIO:** {{categoria}} 
**UBICACIÓN:** {{ciudad}}
**BARRIOS/ZONAS:** {{barriosZonas}}

**OBJETIVO:**
Crear una página de localización completa que combine:
- Todas las mejores prácticas SEO de webs exitosas del sector
- Diseño profesional y moderno
- Optimización para conversión local

**ESTRUCTURA REQUERIDA:**

📍 **Hero Section**
- H1: "{{categoria}} en {{ciudad}} - Servicio 24 Horas"
- Subtítulo con propuesta de valor
- 2-3 CTAs destacados (Llamar, WhatsApp, Formulario)
- Imagen hero optimizada

🛠️ **Servicios**
- Grid de servicios principales (mínimo 6)
- Iconos visuales
- Breve descripción de cada uno
- Links a páginas específicas de servicio

✨ **Por qué elegirnos**
- Mínimo 4 razones con íconos
- Datos concretos (años experiencia, clientes, etc.)
- Certificaciones o garantías

🚨 **CTA de Urgencias**
- Sección destacada visualmente
- Teléfono grande y clicable
- Tiempo de respuesta
- Disponibilidad 24/7

📍 **Zonas de Servicio**
- Listado de barrios: {{barriosZonas}}
- Mapa visual (si posible)
- Enlaces internal a otras location pages

💰 **Precios Transparentes**
- Tabla de precios aproximados
- "Sin cargos ocultos"
- Formas de pago

❓ **FAQ**
- Mínimo 8 preguntas frecuentes
- Schema FAQ markup
- Expandibles/acordeón

📞 **Contacto**
- NAP completo y consistente
- Formulario de contacto
- Botón flotante WhatsApp
- Horarios

⚖️ **Legal**
- Links a Aviso Legal, Privacidad, Cookies

**REQUISITOS TÉCNICOS:**
- HTML5 semántico
- Schema LocalBusiness completo
- Responsive (mobile-first)
- Core Web Vitals optimizados
- Internal linking estratégico

**DISEÑO:**
- Colores corporativos mantenidos
- Tipografía legible (mínimo 16px body)
- Espaciado generoso  
- CTAs contrastantes
- Iconos modernos (Font Awesome o similar)`,

    OPTIMIZAR_WEB_EXISTENTE: `🎨 OPTIMIZAR WEB EXISTENTE CON MEJORES PRÁCTICAS

**WEB ACTUAL:** {{url}}
**ANÁLISIS BASE:** Usar hallazgos del análisis de competencia

**OBJETIVO:**
Aplicar todas las mejores prácticas identificadas del Local Pack sin perder:
- NAP (Name, Address, Phone) actual
- Diseño y colores corporativos
- Contenido único de valor

**MEJORAS A APLICAR:**

1. **Estructura de Encabezados**
   - Ajustar jerarquía H1-H6 según patrón ganador
   - H1 único y keyword-rich

2. **Menú de Navegación**  
   - Reorganizar según estructura común exitosa
   - Máximo 7 items principales
   - Menú mobile hamburguesa

3. **Contenido**
   - Expansión de secciones clave
   - Añadir bloques faltosos: FAQ, Testimonios, etc.
   - Optimización de CTAs

4. **Schema Markup**
   - Implementar todos los schemas del análisis
   - LocalBusiness, Service, FAQ, Review

5. **Internal Linking**
   - Estrategia de enlaces internos
   - Anchor texts optimizados

6. **Páginas de Servicio**
   - Crear página individual por cada servicio
   - Estructura uniforme
   - Optimización keyword long-tail

7. **Legal y RGPD**
   - Aviso Legal
   - Política de Privacidad
   - Política de Cookies
   - Banner de cookies funcional

**NO CAMBIAR:**
- NAP existente
- Paleta de colores corporativa
- Logo ymarca

**ENTREGABLE:**
Código HTML/CSS/JS completo y funcional`,

    // ===== ESTRATEGIA SEO ===== //

    ESTRATEGIA_BASADA_AUDITORIA: `📊 ESTRATEGIA SEO BASADA EN AUDITORÍA

**CONTEXTO:**
Basándome en la auditoría técnica SEO completa (Alcance: {{seoScope}})

**NEGOCIO:** {{nombre}}
**UBICACIÓN:** {{ciudad}}  
**COMPETENCIA ANALIZADA:** Webs del Local Pack en 7 ciudades europeas

**OBJETIVO:**
Diseñar una estrategia SEO local específica que use EXACTAMENTE la estructura ganadora identificada en el análisis de competencia.

**COMPONENTES ESTRATÉGICOS:**

1. **Arquitectura Web**
   - Replicar estructura de menú exitosa
   - Definir páginas prioritarias
   - Jerarquía interna y silos de contenido

2. **Optimización On-Page**
   - Templates de meta tags por tipo de página
   - Estructura de encabezados estándar
   - Densidad keyword objetivo

3. **Contenido**
   - Plan de contenidos mensual
   - Long-tail keywords por servicio
   - FAQs optimizadas para featured snippets

4. **Local SEO**
   - Optimización Google Business Profile
   - Estrategia de reseñas
   - Citaciones en directorios
   - Schema LocalBusiness refinado

5. **Link Building**
   - Identificar fuentes de backlinks competencia
   - Estrategia de directorios locales
   - Partnerships locales

6. **Technical SEO**
   - Roadmap de mejoras técnicas priorizadas
   - Core Web Vitals targets
   - Mobile-first optimizations

**PROFUNDIDAD:** {{analysisDepth}}
**FORMATO ENTREGA:** {{deliveryFormat}}

**ENTREGABLE:**
Documento estratégico actionable con timeline y KPIs`,

    KEYWORDS_LOCALES: `🔑 INVESTIGACIÓN DE KEYWORDS LOCALES

**INDUSTRIA:** {{categoria}}
**UBICACIÓN PRIMARY:** {{ciudad}}
**ZONAS/BARRIOS:** {{barriosZonas}}

**OBJETIVO:**
Identificar oportunidades de keywords con intención local y transaccional

**TIPOS DE KEYWORDS A INVESTIGAR:**

1. **Head Terms Locales**
   - {{categoria}} {{ciudad}}
   - {{categoria}} {{ciudad}} 24h
   - {{categoria}} urgente {{ciudad}}

2. **Long-Tail por Servicio**
   - [servicio específico] {{ciudad}}
   - [servicio específico] urgente {{ciudad}}
   - precio [servicio específico] {{

ciudad}}

3. **Micro-Local (por barrio)**
   - {{categoria}} [barrio]
   - [servicio] [barrio] {{ciudad}}

4. **Intención Transaccional**
   - contratar {{categoria}} {{ciudad}}
   - llamar {{categoria}} {{ciudad}}
   - empresa {{categoria}} {{ciudad}}

5. **Preguntas (Featured Snippets)**
   - cuánto cuesta {{categoria}} en {{ciudad}}
   - mejor {{categoria}} {{ciudad}}
   - {{categoria}} cerca de mí

**MÉTRICAS SOLICITAR:**
- Volumen de búsqueda
- Dificultad (KD)
- CPC
- Intención (informacional/transaccional)
- SERP features

**ENTREGA:**
Excel con keywords categorizadas y priorizadas`,

    // ===== PROMPTS AVANZADOS ===== //

    CREAR_SISTEMA_COMPONENTES: `⚙️ CREAR SISTEMA DE COMPONENTES WEB REUTILIZABLES

**OBJETIVO:**
Desarrollar un sistema de componentes HTML/CSS reutilizables para location pages

**COMPONENTES A CREAR:**

1. **Hero Section**
   - Variantes: con/sin imagen, con/sin formulario
   - Props: título, subtítulo, CTAs, imagen

2. **Service Grid**
   - Layout: 2, 3, 4 o 6 columnas
   - Props: servicios[], iconos[], enlaces[]

3. **Why Choose Us**
   - Props: razones[], iconos[]
   - Layout: horizontal o vertical

4. **Emergency CTA**
   - Props: teléfono, texto urgencia, horario

5. **Service Areas**
   - Props: barrios[], mapa (opcional)
   - Estilo: lista, grid, o mapa interactivo

6. **Pricing Table**
   - Props: servicios[], precios[], descripción[]
   - Disclaimer: "Precios orientativos"

7. **FAQ Accordion**
   - Props: preguntas[], respuestas[]
   - Schema FAQ automático

8. **Contact Section**
   - Props: NAP, formulario, mapa
   - Integración con formularios

9. **Footer Completo**
   - Props: links[], legal[], social[], NAP

10. **Floating WhatsApp Button**
    - Props: número, mensaje predeterminado

**REQUISITOS TÉCNICOS:**
- Vanilla HTML/CSS/JS (sin frameworks)
- BEM methodology para clases CSS
- Variables CSS para theming
- Responsive por defecto
- Accesibilidad WCAG AA

**ENTREGABLE:**
- Librería de componentes documentada
- Ejemplos de uso
- CSS variables file para customización`,

};
