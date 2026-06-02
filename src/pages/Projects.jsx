import { usePageTitle } from "../hooks/usePageTitle.js";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ui/ProjectCard.jsx";
import "./Projects.css";

export default function Projects() {
  usePageTitle("Proyectos");

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

      <ul className="projects__grid">
        {projects.map((project, i) => (
          <li key={project.slug} className="projects__item">
            <ProjectCard
              project={project}
              chapter={`Cap. ${String(i + 1).padStart(2, "0")}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
