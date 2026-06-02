import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function Home() {
  usePageTitle(null);
  return (
    <div className="page container">
      <h1>Hola, soy Charlie.</h1>
      <p>
        Construyo aplicaciones web, APIs y experiencias interactivas con enfoque
        en estructura, usabilidad y criterio técnico.
      </p>
      <p>
        <Link to="/projects">Ver proyecto estrella →</Link>{" "}
        <Link to="/tech">Ver tecnologías →</Link>
      </p>
    </div>
  );
}
