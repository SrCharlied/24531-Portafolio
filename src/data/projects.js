/**
 * Fuente única de verdad de los proyectos del portafolio.
 *
 * Cada proyecto:
 *  - slug:        id legible para la ruta /projects/:slug
 *  - name, category, featured (estrella)
 *  - tagline:     descripción corta para tarjetas
 *  - description: descripción larga para el detalle
 *  - tech:        [{ label, variant }] para badges
 *  - highlights:  puntos técnicos destacados
 *  - links:       { demo, api, docs, repo, repoApi, repoClient } (los que apliquen)
 *  - screenshots: [{ src, alt }]
 *  - problem, decisions, challenges, learnings: contenido del detalle
 *  - caseStudy:   [{ title, body }] — solo el proyecto estrella
 */

export const CATEGORIES = [
  "Full-stack",
  "Frontend",
  "Backend/API",
  "Testing/UI",
  "Gamedev/Interactivo",
];

export const projects = [
  {
    slug: "seelescans",
    name: "SeeleScans",
    category: "Full-stack",
    featured: true,
    tagline:
      "Plataforma full-stack para lectura y gestión de contenido manga: API REST en TypeScript/Bun con PostgreSQL y un cliente SPA en JavaScript modular.",
    description:
      "SeeleScans es una plataforma web full-stack enfocada en la consulta y gestión de contenido tipo manga. Está dividida en dos repositorios: un backend REST con ElysiaJS, Bun, TypeScript y PostgreSQL, y un cliente SPA construido con HTML, CSS y JavaScript modular. La API incluye documentación OpenAPI/Swagger, endpoints para manga, capítulos, páginas y tags, además de búsqueda, paginación y ordenamiento. El cliente consume la API real y presenta una experiencia navegable para usuarios finales.",
    tech: [
      { label: "Bun", variant: "accent" },
      { label: "ElysiaJS", variant: "accent" },
      { label: "TypeScript", variant: "accent" },
      { label: "PostgreSQL", variant: "accent-2" },
      { label: "Docker", variant: "accent-2" },
      { label: "OpenAPI", variant: "emphasis" },
      { label: "JS modular", variant: "default" },
    ],
    highlights: [
      "API REST propia con ElysiaJS + Bun",
      "Backend en TypeScript",
      "PostgreSQL como base de datos",
      "Docker y docker-compose",
      "Documentación OpenAPI escrita a mano",
      "Swagger UI publicada",
      "Cliente SPA con JavaScript modular",
      "Consumo real de la API",
      "Separación frontend / backend",
      "Deploy público",
    ],
    links: {
      demo: "https://seelescans.servigtdev.com",
      api: "https://api.seele.servigtdev.com",
      docs: "https://api.seele.servigtdev.com/docs",
      repoApi: "https://github.com/SrCharlied/SeeleScans-API",
      repoClient: "https://github.com/SrCharlied/SeeleScans-Client",
    },
    screenshots: [
      {
        src: "/screenshots/seelescans-client.webp",
        alt: "Página principal del cliente de SeeleScans con la grilla de manga",
      },
      {
        src: "/screenshots/seelescans-detail.webp",
        alt: "Vista de detalle / lector de un capítulo en SeeleScans",
      },
      {
        src: "/screenshots/seelescans-api.webp",
        alt: "Swagger UI de la API de SeeleScans con los endpoints documentados",
      },
    ],
    caseStudy: [
      {
        title: "Contexto",
        body: "Quise construir algo que se sintiera como un producto real, no como una tarea. Elegí una plataforma de lectura de manga porque me obligaba a modelar datos con relaciones (manga → capítulos → páginas → tags) y a diseñar una API pensada para ser consumida por un cliente independiente.",
      },
      {
        title: "Arquitectura",
        body: "Separé responsabilidades en dos repositorios: una API REST desplegable por su cuenta y un cliente SPA que la consume. Esa separación me permitió versionar, documentar y desplegar cada parte de forma independiente, como en un producto de verdad.",
      },
      {
        title: "Backend",
        body: "La API está hecha con ElysiaJS sobre Bun y TypeScript, con PostgreSQL como base de datos. Implementa endpoints para manga, capítulos, páginas y tags, con búsqueda, paginación y ordenamiento. Todo se ejecuta en contenedores con Docker y docker-compose.",
      },
      {
        title: "Frontend",
        body: "El cliente es una SPA en HTML, CSS y JavaScript modular (sin framework). Consume la API real y maneja la navegación entre vistas. Lo hice vanilla a propósito para demostrar que entiendo lo que un framework hace por debajo.",
      },
      {
        title: "Documentación / API",
        body: "Escribí la especificación OpenAPI a mano y publiqué la Swagger UI. Esto me hizo pensar la API como contrato: qué recibe, qué devuelve y qué errores expone, antes de implementarla.",
      },
      {
        title: "Decisiones técnicas",
        body: "Bun + ElysiaJS por rendimiento y tipado de primera clase. PostgreSQL por las relaciones del dominio. Cliente vanilla para contrastar con el resto del portafolio (hecho en React) y mostrar que sé construir SPAs con y sin framework.",
      },
      {
        title: "Qué mejoraría después",
        body: "Agregar pruebas automatizadas a la API, autenticación para gestión de contenido, y migrar el cliente a un build con bundler para optimizar la carga. También cachear respuestas frecuentes.",
      },
    ],
  },

  {
    slug: "gamestore",
    name: "GameStore",
    category: "Full-stack",
    featured: false,
    tagline:
      "Sistema full-stack de inventario y ventas para una tienda de figuras/videojuegos, con Laravel, React, PostgreSQL y Docker Compose.",
    description:
      "GameStore es un sistema de inventario y ventas con arquitectura de tres capas: PostgreSQL como base de datos relacional, Laravel como backend REST API y React/Vite como frontend SPA. Implementa autenticación, roles, reportes, compras, auditoría de precios, exportación CSV y despliegue reproducible con Docker Compose.",
    tech: [
      { label: "Laravel", variant: "accent" },
      { label: "React", variant: "accent" },
      { label: "Vite", variant: "accent" },
      { label: "PostgreSQL", variant: "accent-2" },
      { label: "Docker Compose", variant: "accent-2" },
      { label: "Sanctum", variant: "emphasis" },
      { label: "Vitest", variant: "default" },
    ],
    highlights: [
      "Laravel API",
      "React + Vite",
      "PostgreSQL",
      "Docker Compose con servicios db, api y web",
      "Autenticación SPA con Laravel Sanctum",
      "Roles y permisos",
      "Stored procedures",
      "Triggers de auditoría",
      "Reportes filtrables",
      "Exportación CSV",
      "Pruebas frontend con Vitest",
    ],
    links: {
      demo: "https://gamestore.servigtdev.com",
      repo: "https://github.com/SrCharlied/24531-GameStore/tree/proyecto-3",
    },
    screenshots: [
      {
        src: "/screenshots/gamestore.webp",
        alt: "Vista de inventario/ventas del sistema GameStore",
      },
    ],
    problem:
      "Construir un sistema de gestión completo, con lógica de negocio real (compras, roles, auditoría) y una base de datos relacional bien modelada.",
    decisions: [
      "Arquitectura de tres capas (db / api / web) para separar responsabilidades.",
      "Laravel Sanctum para autenticar la SPA sin sobre-complicar.",
      "Stored procedures y triggers para mover lógica crítica a la base de datos.",
      "Docker Compose para un entorno reproducible con un solo comando.",
    ],
    challenges: [
      "Configurar la autenticación SPA con Sanctum entre dominios.",
      "Coordinar los tres servicios en Docker Compose.",
    ],
    learnings: [
      "Diseño de bases de datos relacionales con lógica en la propia BD.",
      "Despliegue multi-servicio reproducible.",
    ],
  },

  {
    slug: "elden-ring-wiki",
    name: "Elden Ring Wiki",
    category: "Frontend",
    featured: false,
    tagline:
      "Blog interactivo con React y Vite que consume una API externa para explorar información de Elden Ring por categorías, filtros y detalle.",
    description:
      "Wiki/blog interactivo desarrollado con React y Vite que consume una API externa de Elden Ring. Permite explorar información mediante categorías, filtros y páginas de detalle, con navegación dinámica y diseño responsivo.",
    tech: [
      { label: "React", variant: "accent" },
      { label: "Vite", variant: "accent" },
      { label: "React Router", variant: "accent" },
      { label: "Axios", variant: "accent-2" },
      { label: "ESLint", variant: "default" },
    ],
    highlights: [
      "React + Vite",
      "React Router",
      "Axios",
      "Consumo de API externa",
      "Filtros por categoría",
      "Página de detalle",
      "Diseño responsivo",
      "ESLint",
    ],
    links: {
      repo: "https://github.com/SrCharlied/vite-blog-24531",
    },
    screenshots: [
      {
        src: "/screenshots/elden-ring-wiki.webp",
        alt: "Listado con filtros de la wiki de Elden Ring",
      },
    ],
    problem:
      "Demostrar dominio de una SPA moderna consumiendo una API externa con navegación dinámica.",
    decisions: [
      "React Router para navegación real entre listado y detalle.",
      "Axios para centralizar las peticiones a la API externa.",
      "Filtros por categoría manejados en el estado del cliente.",
    ],
    challenges: [
      "Normalizar y filtrar los datos que devuelve la API externa.",
    ],
    learnings: [
      "Consumo de APIs de terceros y manejo de su forma de datos.",
      "Navegación dinámica con parámetros de ruta.",
    ],
  },

  {
    slug: "calculadora-gb",
    name: "CalculadoraGB",
    category: "Testing/UI",
    featured: false,
    tagline:
      "Calculadora retro inspirada en Game Boy, con React, TypeScript y Vite, pruebas automatizadas y documentación visual de componentes.",
    description:
      "Calculadora con estética Game Boy desarrollada con React, TypeScript y Vite. El foco está en la calidad: pruebas automatizadas con Vitest y Testing Library, documentación de componentes con Storybook y manejo cuidadoso de errores.",
    tech: [
      { label: "React", variant: "accent" },
      { label: "TypeScript", variant: "accent" },
      { label: "Vite", variant: "accent" },
      { label: "Vitest", variant: "accent-2" },
      { label: "Testing Library", variant: "accent-2" },
      { label: "Storybook", variant: "emphasis" },
    ],
    highlights: [
      "React + TypeScript",
      "Vite",
      "Vitest",
      "Testing Library",
      "Storybook",
      "Manejo de errores",
      "Diseño responsive con estética Game Boy",
    ],
    links: {
      repo: "https://github.com/SrCharlied/calculadoraGB",
    },
    screenshots: [
      {
        src: "/screenshots/calculadora-gb.webp",
        alt: "Calculadora con estética Game Boy",
      },
    ],
    problem:
      "Mostrar cuidado en UI, pruebas y tooling moderno en un proyecto pequeño pero pulido.",
    decisions: [
      "TypeScript para tipado y seguridad en la lógica de cálculo.",
      "Vitest + Testing Library para cubrir el comportamiento.",
      "Storybook para documentar y aislar componentes.",
    ],
    challenges: [
      "Manejar casos de error (división entre cero, entradas inválidas).",
    ],
    learnings: [
      "Testing de componentes y lógica en React.",
      "Documentación de UI con Storybook.",
    ],
  },

  {
    slug: "snake",
    name: "Snake Game",
    category: "Gamedev/Interactivo",
    featured: false,
    tagline:
      "Juego Snake con React y Vite, enfocado en manejo de estado, eventos de teclado, colisiones y progresión de dificultad.",
    description:
      "Implementación del clásico Snake con React y Vite. El proyecto se centra en el manejo de estado de juego, eventos de teclado, lógica de colisiones y progresión de dificultad, con pantallas de inicio y game over.",
    tech: [
      { label: "React", variant: "accent" },
      { label: "Vite", variant: "accent" },
      { label: "Game loop", variant: "accent-2" },
      { label: "Teclado", variant: "default" },
    ],
    highlights: [
      "React + Vite",
      "Estado de juego",
      "Eventos de teclado",
      "Lógica de colisiones",
      "Componentes reutilizables",
      "Pantalla de inicio y game over",
    ],
    links: {
      repo: "https://github.com/SrCharlied/24531_snake",
    },
    screenshots: [
      {
        src: "/screenshots/snake.webp",
        alt: "Partida del juego Snake en curso",
      },
    ],
    problem:
      "Conectar el portafolio con mi interés por los videojuegos y practicar lógica de gameplay en React.",
    decisions: [
      "Manejo del game loop y el estado con hooks de React.",
      "Eventos de teclado para el control del jugador.",
      "Detección de colisiones y progresión de dificultad.",
    ],
    challenges: [
      "Sincronizar el game loop con el ciclo de render de React.",
    ],
    learnings: [
      "Manejo de estado en tiempo real e interactividad.",
      "Lógica de juego: colisiones, dificultad y estados de partida.",
    ],
  },
];

/** Devuelve un proyecto por su slug. */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

/** El proyecto estrella (featured), siempre primero. */
export function getFeaturedProject() {
  return projects.find((p) => p.featured);
}
