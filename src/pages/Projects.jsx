import { useState, useMemo } from "react";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { projects, CATEGORIES } from "../data/projects.js";
import ProjectCard from "../components/ui/ProjectCard.jsx";
import "./Projects.css";

const ALL = "Todos";
const FILTERS = [ALL, ...CATEGORIES];

export default function Projects() {
  usePageTitle("Proyectos");

  const [category, setCategory] = useState(ALL);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory = category === ALL || p.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      const inName = p.name.toLowerCase().includes(q);
      const inTech = p.tech.some((t) => t.label.toLowerCase().includes(q));
      return inName || inTech;
    });
  }, [category, query]);

  const isFiltering = category !== ALL || query.trim() !== "";

  return (
    <div className="page container">
      <header className="projects__header">
        <p className="projects__chapter">Capítulos</p>
        <h1>Proyectos</h1>
        <p className="projects__intro">
          Proyectos donde he trabajado frontend, APIs, bases de datos y
          experiencias interactivas. SeeleScans es la pieza central.
        </p>
      </header>

      <div className="projects__controls">
        <div
          className="projects__filters"
          role="group"
          aria-label="Filtrar por categoría"
        >
          {FILTERS.map((cat) => (
            <button
              key={cat}
              type="button"
              className={
                cat === category
                  ? "projects__filter is-active"
                  : "projects__filter"
              }
              aria-pressed={cat === category}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <label className="projects__search">
          <span className="sr-only">Buscar proyectos</span>
          <input
            type="search"
            placeholder="Buscar por nombre o tecnología…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>

      <p className="projects__count" aria-live="polite">
        {filtered.length}{" "}
        {filtered.length === 1 ? "proyecto" : "proyectos"}
        {isFiltering ? " (filtrado)" : ""}
      </p>

      {filtered.length > 0 ? (
        <ul className="projects__grid">
          {filtered.map((project, i) => (
            <li
              key={project.slug}
              className={
                project.featured
                  ? "projects__item projects__item--featured"
                  : "projects__item"
              }
            >
              <ProjectCard
                project={project}
                chapter={`Cap. ${String(i + 1).padStart(2, "0")}`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="projects__empty">
          <p className="projects__empty-title">Sin resultados</p>
          <p>No hay proyectos que coincidan con tu búsqueda.</p>
          <button
            type="button"
            className="projects__filter"
            onClick={() => {
              setCategory(ALL);
              setQuery("");
            }}
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}
