# Portafolio Técnico de Charlie

Portafolio personal desarrollado como **SPA** para una simulación laboral full-stack junior. Reúne proyectos de frontend, APIs, bases de datos y experiencias interactivas, con **SeeleScans** como proyecto estrella.

🔗 **Demo en vivo:** https://charliedev.servigtdev.com

> **Stack:** React · Vite · React Router · CSS · GitHub API · Docker
> **Estética:** manga / print sobria, en cohesión con el proyecto estrella.

---

## Objetivo

Demostrar uso de React, enrutamiento, manejo de estado, consumo de API con manejo de error visible, diseño responsivo, documentación técnica y buenas prácticas de organización.

## Stack

- **React + Vite** — SPA modular con build rápido.
- **React Router** — navegación real con rutas y página 404.
- **Fetch API** — consumo de la API de GitHub con estrategia de resiliencia.
- **CSS organizado** — variables, estilos globales y CSS co-locado por componente.
- **Docker** — Dockerfile multi-stage (build con Node → Nginx) para un entorno reproducible.

## Funcionalidades

- Navegación SPA con enrutamiento (`/`, `/about`, `/projects`, `/projects/:slug`, `/tech`, `/contact`).
- Listado de proyectos con **filtros por categoría y búsqueda** por nombre/tecnología.
- Detalle de proyecto con **caso de estudio** para SeeleScans.
- **Consumo de la API de GitHub** con estados de carga, error, vacío y éxito.
- **Estrategia de resiliencia** ante el rate limit de GitHub (caché + snapshot).
- Página 404 cuidada.
- Diseño responsive y accesibilidad básica (focus visible, skip-link, `aria-*`, `<title>` por ruta).
- Dockerfile multi-stage para despliegue.

## Estructura

```txt
src/
  components/
    layout/      Navbar, Footer, Layout
    ui/          Button, Card, Badge, SpeechBubble, ProjectCard, LoadingState, ErrorState
    sections/    GitHubActivity
  data/          projects.js, technologies.js, github-snapshot.json
  hooks/         usePageTitle
  pages/         Home, About, Projects, ProjectDetail, Tech, Contact, NotFound
  services/      githubApi.js
  styles/        variables.css, globals.css
```

## Instalación local

```bash
npm install
npm run dev
```

La app queda en `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview   # previsualizar el build
```

## Ejecutar con Docker

```bash
docker build -t portafolio .
docker run --rm -p 8080:80 portafolio
```

La app queda en `http://localhost:8080`. El `nginx.conf` incluye el fallback a `index.html` para que el enrutamiento de la SPA funcione.

## Decisiones técnicas

- **React + Vite** sobre alternativas más pesadas: entorno de desarrollo rápido y build optimizado, suficiente para una SPA de portafolio.
- **CSS plano co-locado** en vez de un framework de estilos: control total sobre la estética manga y un bundle liviano.
- **Consumo de GitHub API con stale-while-revalidate + snapshot**: la API pública tiene un rate limit de 60 req/hora por IP. Para que el portafolio nunca se vea "roto" en una demo, los datos se cachean en `localStorage` y existe un snapshot estático commiteado como último recurso. El origen de los datos se indica con un badge de transparencia.
- **Cliente vanilla en SeeleScans**: el proyecto estrella usa JavaScript modular sin framework a propósito, para contrastar con este portafolio (React) y demostrar dominio de SPAs con y sin framework.
- **Docker multi-stage**: se construye con Node y se sirve con Nginx, generando una imagen pequeña y reproducible. Se despliega en un VPS propio detrás de un reverse proxy.

## Despliegue

Desplegado en un **VPS propio**: la imagen Docker (Nginx) corre como contenedor y **Caddy** actúa como reverse proxy con TLS automático.

```bash
# en el VPS
git pull
docker build -t portafolio .
docker rm -f portafolio
docker run -d --restart unless-stopped -p 127.0.0.1:8090:80 --name portafolio portafolio
```

Bloque de Caddy:

```caddy
charliedev.servigtdev.com {
	encode gzip zstd
	reverse_proxy localhost:8090
}
```

## Autor

**Charlie / SrCharlied** — [github.com/SrCharlied](https://github.com/SrCharlied)
