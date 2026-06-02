import { usePageTitle } from "../hooks/usePageTitle.js";

export default function About() {
  usePageTitle("Sobre mí");
  return (
    <div className="page container">
      <h1>Sobre mí</h1>
      <p>
        Soy Charlie, estudiante de desarrollo fortaleciendo mis habilidades en
        frontend moderno, APIs REST, bases de datos y organización de proyectos.
        Me interesa especialmente construir sistemas interactivos y experiencias
        cercanas al mundo de los videojuegos.
      </p>
    </div>
  );
}
