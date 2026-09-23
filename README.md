# Lepigames - Cachañando

Sitio web oficial de Lepigames y su primer juego de cartas educativo "Cachañando", dedicado al reconocimiento y conservación del patrimonio natural de las aves de Chile. Desarrollado desde la Región de Los Lagos, Chile.

## Descripción del Proyecto

Lepigames es una iniciativa que conecta la ciencia, el arte y la educación a través del juego. "Cachañando" es un juego de cartas de observación y memoria rápida compuesto por 31 especies representativas de la avifauna chilena. El sitio web sirve como plataforma de divulgación, catálogo interactivo de especies, coordinación pedagógica y punto de contacto comercial.

## Tecnologías Utilizadas (Tech Stack)

- Core Framework: Astro 5.x (Static Site Generation / SSG)
- Lenguaje: TypeScript / JavaScript (ES6+)
- Estilos: Tailwind CSS v4 con CSS Vanilla para efectos de diseño personalizados
- Procesamiento de Imágenes: Astro Image Assets (Optimización automática a WebP)
- Fuentes: Google Fonts (Lora, Outfit, Plus Jakarta Sans)
- Formato de entrega: HTML5 semántico, CSS modular y JavaScript optimizado para alto rendimiento móvil y escritorio.

## Arquitectura y Estructura del Proyecto

El proyecto sigue una estructura limpia basada en componentes reutilizables y configuración centralizada:

```text
Lepigames/
├── public/                  Archivos estáticos directos (favicons, robots.txt)
├── src/
│   ├── assets/              Recursos gráficos (ilustraciones de aves, branding, sellos, tramas)
│   ├── components/          Componentes Astro de la interfaz
│   │   ├── Navbar.astro     Navegación superior adaptativa
│   │   ├── Hero.astro       Sección principal, badges y marco de estampilla con sello Chilco
│   │   ├── GameOverview.astro Presentación de dinámica del juego
│   │   ├── SpeciesGallery.astro Galería interactiva de las 31 especies con modales
│   │   ├── StorySection.astro Historia de Lepigames
│   │   ├── EducationSection.astro Proyectos educativos y talleres escolares
│   │   ├── ConservationSection.astro Apoyo a redes de conservación (ROC / Motus)
│   │   ├── NewsSection.astro Noticias y apariciones en prensa
│   │   ├── Faq.astro        Sección de atención y preguntas frecuentes desplegables
│   │   ├── BuyModal.astro   Modal de compra directa y contacto por WhatsApp
│   │   └── Footer.astro     Pie de página oficial y créditos
│   ├── config/              Datos parametrizables del sitio y catálogo de especies (site.ts)
│   ├── layouts/             Layout base con metadatos SEO y fuentes (Layout.astro)
│   ├── pages/               Rutas de la aplicación (index.astro, gracias.astro)
│   └── styles/              Estilos globales y efectos visuales (global.css)
├── astro.config.mjs         Configuración de Astro
├── package.json             Dependencias y scripts del proyecto
└── README.md                Documentación del proyecto
```

## Características Principales

1. Catálogo Interactivo de Especies:
   - Visualización de las 31 especies del juego con fichas individuales que detallan nombre común, nombre científico, familia taxonómica y tag de hábitat.
   - Modales emergentes con ilustraciones de alta definición de las aves.

2. Identidad Visual Naturista:
   - Paleta de colores inspirada en los bosques valdivianos y el patrimonio natural del sur de Chile (tonos verde bosque, verde sabia, crema y dorado).
   - Elementos visuales temáticos como marcos de estampilla postal troquelados y sello ilustrado de la Flor de Chilco (Fuchsia magellanica).

3. Atención al Cliente y Contacto Directo:
   - Integración de canales oficiales vía WhatsApp, Instagram y correo electrónico.
   - Modal de compra responsivo para solicitar mazos y compras institucionales.

4. Optimización y SEO:
   - Carga diferida y generación estática optimizada para tiempos de respuesta ultra rápidos.
   - Marcado semántico completo para buscadores.

## Comandos de Desarrollo

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Descripción |
| :--- | :--- |
| `npm install` | Instala todas las dependencias del proyecto |
| `npm run dev` | Inicia el servidor de desarrollo local |
| `npm run build` | Compila la aplicación para producción en el directorio `./dist/` |
| `npm run preview` | Permite previsualizar la compilación localmente |

## Créditos y Autoría

- Proyecto: Lepigames - Ciencia, Arte y Educación
- Desarrollo Web: Felipe
- Ubicación: Región de Los Lagos, Chile
