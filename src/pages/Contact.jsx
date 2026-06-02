import { usePageTitle } from "../hooks/usePageTitle.js";

export default function Contact() {
  usePageTitle("Contacto");
  return (
    <div className="page container">
      <h1>Contacto</h1>
      <ul>
        <li>
          <a
            href="https://github.com/SrCharlied"
            target="_blank"
            rel="noreferrer"
          >
            github.com/SrCharlied
          </a>
        </li>
        <li>
          <a href="mailto:carlosandrelopez16@gmail.com">
            carlosandrelopez16@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}
