import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import Badge from "./Badge.jsx";
import "./ProjectCard.css";

/**
 * Tarjeta de proyecto reutilizable (listado de proyectos y home).
 * Usa la primera captura del proyecto y un máximo de badges.
 */
export default function ProjectCard({ project, chapter }) {
  const { slug, name, category, tagline, tech, screenshots, featured } =
    project;
  const cover = screenshots?.[0];

  return (
    <Card featured={featured} as="article" className="project-card">
      <Link
        to={`/projects/${slug}`}
        className="project-card__link"
        aria-label={`Ver detalle de ${name}`}
      >
        {cover && (
          <div className="project-card__media">
            <img
              src={cover.src}
              alt={cover.alt}
              loading="lazy"
              width="1600"
              height="1000"
            />
          </div>
        )}
        <div className="project-card__body">
          {chapter && <p className="project-card__chapter">{chapter}</p>}
          <div className="project-card__head">
            <h3 className="project-card__title">{name}</h3>
            <Badge variant={featured ? "accent" : "default"}>{category}</Badge>
          </div>
          <p className="project-card__tagline">{tagline}</p>
          <div className="project-card__tech">
            {tech.slice(0, 5).map((t) => (
              <Badge key={t.label} variant={t.variant}>
                {t.label}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
}
