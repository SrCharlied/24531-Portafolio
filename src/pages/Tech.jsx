import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { technologies } from "../data/technologies.js";
import { getProjectBySlug } from "../data/projects.js";
import Card from "../components/ui/Card.jsx";
import "./Tech.css";

export default function Tech() {
  usePageTitle("Tecnologías");

  return (
    <div className="page container">
      <header className="tech__header">
        <p className="tech__chapter">Stack</p>
        <h1>Tecnologías</h1>
        <p className="tech__intro">
          No solo logos: cada elección responde a un porqué y a cómo se aplicó.
          Esta página es una respuesta directa a lo que evalúa la oferta.
        </p>
      </header>

      <div className="tech__list">
        {technologies.map((t) => (
          <Card key={t.name} as="section" className="tech__card">
            <h2 className="tech__name">{t.name}</h2>
            <p className="tech__why">
              <strong>Por qué:</strong> {t.why}
            </p>
            <p className="tech__how">
              <strong>Cómo lo apliqué:</strong> {t.how}
            </p>
            {t.relatedProjects?.length > 0 && (
              <p className="tech__related">
                <strong>También en:</strong>{" "}
                {t.relatedProjects.map((slug, i) => {
                  const p = getProjectBySlug(slug);
                  if (!p) return null;
                  return (
                    <span key={slug}>
                      {i > 0 && ", "}
                      <Link to={`/projects/${slug}`}>{p.name}</Link>
                    </span>
                  );
                })}
              </p>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
