import snapshot from "../data/github-snapshot.json"; // respaldo estático commiteado

const USER = "SrCharlied";
const API_URL = `https://api.github.com/users/${USER}/repos?sort=updated&per_page=12`;
const CACHE_KEY = "gh:repos";
const TTL = 1000 * 60 * 60; // 1 hora

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw); // { data, savedAt }
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data, savedAt: Date.now() })
    );
  } catch {
    /* localStorage lleno o bloqueado: no es crítico */
  }
}

/**
 * Obtiene los repos de GitHub con estrategia de resiliencia.
 *
 * Estrategia stale-while-revalidate con respaldo estático:
 *   1. Caché fresca → se usa directo (sin red).
 *   2. Si no, se intenta la API en vivo.
 *   3. Si la red falla pero hay caché vieja → se usa (stale).
 *   4. Último recurso → snapshot estático commiteado (siempre funciona).
 *
 * @returns {Promise<{ repos: any[], source: "cache" | "live" | "snapshot" }>}
 */
export async function getRepos() {
  const cached = readCache();
  const fresh = cached && Date.now() - cached.savedAt < TTL;

  if (fresh) return { repos: cached.data, source: "cache" };

  try {
    const res = await fetch(API_URL, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error(`GitHub respondió ${res.status}`);
    const repos = await res.json();
    writeCache(repos);
    return { repos, source: "live" };
  } catch {
    if (cached) return { repos: cached.data, source: "cache" }; // stale
    return { repos: snapshot, source: "snapshot" }; // respaldo
  }
}
