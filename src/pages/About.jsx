import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";
import Badge from "../components/ui/Badge.jsx";
import "./About.css";

const interests = [
  "Frontend moderno",
  "APIs REST",
  "Bases de datos",
  "Docker",
  "Gamedev",
  "Interactividad",
];

export default function About() {
  usePageTitle("Sobre mí");

  return (
    <div className="page container about">
      <p className="about__chapter">Cap. — Sobre mí</p>
      <h1>Sobre mí</h1>

      <p className="about__lead">
        Soy Charlie, estudiante de desarrollo fortaleciendo mis habilidades en
        frontend moderno, APIs REST, bases de datos y organización de proyectos.
        Me interesa especialmente construir sistemas interactivos y experiencias
        cercanas al mundo de los videojuegos, donde la lógica, el diseño y la
        experiencia del usuario se conectan.
      </p>

      <section className="about__block">
        <h2>Formación</h2>
        <p>
          Estudiante de desarrollo de software, con proyectos académicos y
          personales en frontend, backend y bases de datos relacionales.
        </p>
      </section>

      <section className="about__block">
        <h2>Intereses técnicos</h2>
        <div className="about__badges">
          {interests.map((i) => (
            <Badge key={i} variant="accent">
              {i}
            </Badge>
          ))}
        </div>
      </section>

      <section className="about__block">
        <h2>Gamedev e interactividad</h2>
        <p>
          Me atraen los proyectos donde la lógica se vuelve experiencia: juegos,
          interfaces interactivas y productos con temática gaming. SeeleScans y
          el Snake son dos caras de ese interés.
        </p>
      </section>

      <section className="about__block">
        <h2>Contacto</h2>
        <p>
          Podés escribirme o ver mi trabajo desde la{" "}
          <Link to="/contact">página de contacto</Link>.
        </p>
      </section>
    </div>
  );
}
