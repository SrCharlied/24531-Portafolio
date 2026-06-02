import { usePageTitle } from "../hooks/usePageTitle.js";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import Badge from "../components/ui/Badge.jsx";
import SpeechBubble from "../components/ui/SpeechBubble.jsx";
import "./Home.css";

export default function Home() {
  usePageTitle(null);

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
          <p className="home__chapter">Cap. 01 — SeeleScans</p>
          <h3>SeeleScans</h3>
          <p>
            Plataforma full-stack para lectura y gestión de contenido manga: una
            API REST en TypeScript/Bun con PostgreSQL y un cliente SPA en
            JavaScript modular.
          </p>
          <div className="home__badges">
            <Badge variant="accent">Bun + ElysiaJS</Badge>
            <Badge variant="accent">TypeScript</Badge>
            <Badge variant="accent-2">PostgreSQL</Badge>
            <Badge variant="accent-2">Docker</Badge>
            <Badge variant="emphasis">OpenAPI</Badge>
          </div>
          <div className="home__cta">
            <Button to="/projects/seelescans" size="sm">
              Ver caso de estudio
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
