import { useParams, Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  usePageTitle(slug ? `Proyecto: ${slug}` : "Proyecto");
  return (
    <div className="page container">
      <h1>Detalle de proyecto</h1>
      <p>
        Slug recibido: <code>{slug}</code>
      </p>
      <p>El caso de estudio completo llega en la siguiente fase.</p>
      <p>
        <Link to="/projects">← Volver a proyectos</Link>
      </p>
    </div>
  );
}
