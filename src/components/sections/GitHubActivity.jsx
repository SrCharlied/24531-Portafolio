import { useState, useEffect, useCallback } from "react";
import { getRepos } from "../../services/githubApi.js";
import Badge from "../ui/Badge.jsx";
import LoadingState from "../ui/LoadingState.jsx";
import ErrorState from "../ui/ErrorState.jsx";
import "./GitHubActivity.css";

const GITHUB_URL = "https://github.com/SrCharlied";
const MAX = 6;

// Nota de transparencia según el origen de los datos.
const SOURCE_NOTE = {
  cache: "Datos en caché",
  snapshot: "Mostrando datos recientes guardados",
};

export default function GitHubActivity() {
  const [status, setStatus] = useState("loading"); // loading | success | empty | error
  const [repos, setRepos] = useState([]);
  const [source, setSource] = useState(null);

  // Procesa el resultado de getRepos y decide el estado final.
  const applyResult = useCallback(({ repos: data, source: src }) => {
    const visible = data.filter((r) => !r.fork).slice(0, MAX);
    setSource(src);
    setRepos(visible);
    setStatus(visible.length === 0 ? "empty" : "success");
  }, []);

  // Carga manual (botón de reintento). Fuerza ignorar la caché.
  const reload = useCallback(() => {
    setStatus("loading");
    try {
      localStorage.removeItem("gh:repos");
    } catch {
      /* ignore */
    }
    getRepos()
      .then(applyResult)
      .catch(() => setStatus("error"));
  }, [applyResult]);

  // Carga inicial: el estado parte en "loading", así que solo
  // actualizamos tras resolver la promesa (nunca de forma síncrona).
  useEffect(() => {
    let cancelled = false;
    getRepos()
      .then((result) => {
        if (!cancelled) applyResult(result);
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [applyResult]);

  return (
    <section className="gh" aria-labelledby="gh-title">
      <div className="gh__head">
        <h2 id="gh-title" className="gh__title">
          Actividad en GitHub
        </h2>
        {status === "success" && source && SOURCE_NOTE[source] && (
          <Badge variant="accent-2">{SOURCE_NOTE[source]}</Badge>
        )}
      </div>

      {status === "loading" && (
        <LoadingState message="Cargando repositorios desde GitHub…" />
      )}

      {status === "error" && (
        <ErrorState
          message="No se pudieron cargar los repositorios. Puedes visitar GitHub directamente."
          action={reload}
          link={GITHUB_URL}
          linkLabel="Ir a GitHub"
        />
      )}

      {status === "empty" && (
        <div className="gh__empty">
          <p>No se encontraron repositorios públicos.</p>
        </div>
      )}

      {status === "success" && (
        <ul className="gh__grid">
          {repos.map((repo) => (
            <li key={repo.name} className="gh__item">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="gh__repo"
              >
                <h3 className="gh__repo-name">{repo.name}</h3>
                {repo.description && (
                  <p className="gh__repo-desc">{repo.description}</p>
                )}
                <div className="gh__repo-meta">
                  {repo.language && (
                    <Badge variant="accent">{repo.language}</Badge>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="gh__stars">★ {repo.stargazers_count}</span>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
