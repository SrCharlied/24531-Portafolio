import { useParams, Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { getProjectBySlug } from "../data/projects.js";
import Button from "../components/ui/Button.jsx";
import Badge from "../components/ui/Badge.jsx";
import NotFound from "./NotFound.jsx";
import "./ProjectDetail.css";

const LINK_LABELS = {
  demo: "Ver demo",
  api: "API",
  docs: "Swagger / Docs",
  repo: "Repositorio",
  repoApi: "Repo API",
  repoClient: "Repo Cliente",
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  // Si el slug no existe, mostramos la 404 (mismo componente, coherencia UX).
  usePageTitle(project ? project.name : "Proyecto no encontrado");
  if (!project) return <NotFound />;

  const {
    name,
    category,
    featured,
    description,
    tech,
    highlights,
    links = {},
    screenshots = [],
    caseStudy,
    problem,
    decisions,
    challenges,
    learnings,
  } = project;

  const linkEntries = Object.entries(links).filter(([, url]) => url);

  return (
    <article className="page container detail">
      <p className="detail__back">
        <Link to="/projects">← Volver a proyectos</Link>
      </p>

      <header className="detail__header">
        <div className="detail__head-row">
          <h1>{name}</h1>
          <Badge variant={featured ? "accent" : "default"}>{category}</Badge>
        </div>
        <p className="detail__description">{description}</p>

        <div className="detail__tech">
          {tech.map((t) => (
            <Badge key={t.label} variant={t.variant}>
              {t.label}
            </Badge>
          ))}
        </div>

        {linkEntries.length > 0 && (
          <div className="detail__links">
            {linkEntries.map(([key, url]) => (
              <Button key={key} href={url} size="sm" variant="ghost">
                {LINK_LABELS[key] ?? key}
              </Button>
            ))}
          </div>
        )}
      </header>

      {screenshots.length > 0 && (
        <section className="detail__shots" aria-label="Capturas del proyecto">
          {screenshots.map((shot) => (
            <figure key={shot.src} className="detail__shot">
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </figure>
          ))}
        </section>
      )}

      {/* Proyecto estrella → caso de estudio */}
      {caseStudy && (
        <section className="detail__case" aria-label="Caso de estudio">
          {caseStudy.map((s) => (
            <div key={s.title} className="detail__case-section">
              <h2>{s.title}</h2>
              <p>{s.body}</p>
            </div>
          ))}
        </section>
      )}

      {/* Resto de proyectos → detalle estándar */}
      {!caseStudy && (
        <section className="detail__std">
          {problem && (
            <div className="detail__block">
              <h2>Problema / propósito</h2>
              <p>{problem}</p>
            </div>
          )}
          {decisions?.length > 0 && (
            <div className="detail__block">
              <h2>Decisiones técnicas</h2>
              <ul>
                {decisions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          )}
          {challenges?.length > 0 && (
            <div className="detail__block">
              <h2>Retos</h2>
              <ul>
                {challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          )}
          {learnings?.length > 0 && (
            <div className="detail__block">
              <h2>Aprendizajes</h2>
              <ul>
                {learnings.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {highlights?.length > 0 && (
        <section className="detail__block">
          <h2>Puntos técnicos destacados</h2>
          <ul className="detail__highlights">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
