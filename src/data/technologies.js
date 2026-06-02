/**
 * Stack del portafolio, argumentado.
 * Esta página responde directamente a la oferta: el evaluador quiere ver
 * que el stack tiene sentido, no solo logos.
 *
 * Cada tecnología:
 *  - name
 *  - why:   por qué se eligió
 *  - how:   cómo se aplicó en este portafolio
 *  - relatedProjects: slugs donde también aparece (opcional)
 */

export const technologies = [
  {
    name: "React + Vite",
    why: "Quería una SPA modular y un entorno de desarrollo rápido. Vite simplifica el dev server y el build de producción; React permite separar la interfaz en componentes reutilizables.",
    how: "Todo el portafolio es una SPA en React. Los componentes UI (Button, Card, Badge, SpeechBubble) se reutilizan en todas las páginas.",
    relatedProjects: ["gamestore", "elden-ring-wiki", "calculadora-gb", "snake"],
  },
  {
    name: "React Router",
    why: "Para demostrar navegación real dentro de una SPA, con rutas, parámetros y página 404, no una sola landing.",
    how: "Rutas para inicio, proyectos, detalle de proyecto (con slug), tecnologías, contacto y NotFound.",
    relatedProjects: ["gamestore", "elden-ring-wiki"],
  },
  {
    name: "Fetch API / JavaScript asíncrono",
    why: "Para cumplir con el consumo de API y demostrar manejo de estados de carga, error y vacío.",
    how: "El portafolio consume la API pública de GitHub con una estrategia de resiliencia (caché en localStorage + snapshot estático de respaldo) para no caer ante el rate limit.",
    relatedProjects: ["seelescans", "elden-ring-wiki"],
  },
  {
    name: "CSS organizado",
    why: "Mantener una estética manga sobria sin sacrificar legibilidad ni el diseño responsive.",
    how: "Variables CSS para la paleta y tipografía, estilos globales, y CSS co-locado por componente. Halftone sutil y viñetas como capa decorativa.",
  },
  {
    name: "Docker",
    why: "Mostrar que el proyecto puede ejecutarse en un entorno reproducible, alineado con la oferta de Pixelworks.",
    how: "Dockerfile multi-stage (build con Node → servir con Nginx). El portafolio se despliega en un VPS propio detrás de un reverse proxy.",
    relatedProjects: ["seelescans", "gamestore"],
  },
  {
    name: "Git / GitHub",
    why: "Demostrar el proceso de desarrollo, no solo el resultado final.",
    how: "Commits descriptivos por fase y README detallado. La actividad de GitHub se muestra en vivo en el portafolio.",
  },
];
