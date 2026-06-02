import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function Projects() {
  usePageTitle("Proyectos");
  return (
    <div className="page container">
      <h1>Proyectos</h1>
      <p>El listado con filtros llega en la siguiente fase.</p>
      <p>
        <Link to="/projects/seelescans">Ver SeeleScans (estrella) →</Link>
      </p>
    </div>
  );
}
