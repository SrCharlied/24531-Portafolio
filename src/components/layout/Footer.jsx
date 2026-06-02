import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__note">
          Charlie / SrCharlied — Portafolio full-stack junior
        </p>
        <ul className="footer__links">
          <li>
            <a
              href="https://github.com/SrCharlied"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:carlosandrelopez16@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
