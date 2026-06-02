import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Inicio", end: true },
  { to: "/projects", label: "Proyectos" },
  { to: "/tech", label: "Tecnologías" },
  { to: "/about", label: "Sobre mí" },
  { to: "/contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="Charlie.dev — inicio">
          <span className="navbar__brand-name">Charlie</span>
          <span className="navbar__brand-ext">.dev</span>
        </Link>
        <nav aria-label="Navegación principal">
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    isActive ? "navbar__link is-active" : "navbar__link"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
