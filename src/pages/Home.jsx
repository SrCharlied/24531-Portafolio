import { usePageTitle } from "../hooks/usePageTitle.js";
import { projects } from "../data/projects.js";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import Badge from "../components/ui/Badge.jsx";
import SpeechBubble from "../components/ui/SpeechBubble.jsx";
import ProjectCard from "../components/ui/ProjectCard.jsx";
import GitHubActivity from "../components/sections/GitHubActivity.jsx";
import "./Home.css";

export default function Home() {
  usePageTitle(null);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="page container home">
      <section className="home__hero">
        <p className="home__chapter">Cap. 00 — Inicio</p>
        <h1 className="home__title">
          Hola, soy <span className="home__name">Charlie</span>.
        </h1>

        <SpeechBubble tail="bottom-left" className="home__bubble">
          Construyo aplicaciones web, APIs y experiencias interactivas con
          enfoque en estructura, usabilidad y criterio técnico.
        </SpeechBubble>

        <div className="home__cta">
          <Button to="/projects/seelescans">Ver proyecto estrella</Button>
          <Button to="/tech" variant="ghost">
            Ver tecnologías
          </Button>
        </div>
      </section>

      <section className="home__featured" aria-labelledby="featured-title">
        <h2 id="featured-title" className="home__section-title">
          Proyecto estrella
        </h2>
        <Card featured as="article" className="home__featured-card">
          <p className="home__chapter">Cap. 01 — {featured.name}</p>
          <h3>{featured.name}</h3>
          <p>{featured.tagline}</p>
          <div className="home__badges">
            {featured.tech.slice(0, 5).map((t) => (
              <Badge key={t.label} variant={t.variant}>
                {t.label}
              </Badge>
            ))}
          </div>
          <div className="home__cta">
            <Button to={`/projects/${featured.slug}`} size="sm">
              Ver caso de estudio
            </Button>
          </div>
        </Card>
      </section>

      <section className="home__more" aria-labelledby="more-title">
        <h2 id="more-title" className="home__section-title">
          Más proyectos
        </h2>
        <ul className="home__grid">
          {rest.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <div className="home__cta">
          <Button to="/projects" variant="ghost">
            Ver todos los proyectos
          </Button>
        </div>
      </section>

      <GitHubActivity />
    </div>
  );
}
