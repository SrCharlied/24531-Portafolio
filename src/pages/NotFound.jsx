import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function NotFound() {
  usePageTitle("404 — Página no encontrada");
  return (
    <div className="page container" style={{ textAlign: "center" }}>
      <h1>404</h1>
      <p>Esta página salió del capítulo. No encontramos lo que buscabas.</p>
      <p>
        <Link to="/">← Volver al inicio</Link>
      </p>
    </div>
  );
}
