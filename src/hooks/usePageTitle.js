import { useEffect } from "react";

const BASE = "Charlie.dev";

/**
 * Ajusta document.title por ruta (SEO básico para una SPA).
 * Pasa null/undefined para usar solo el título base.
 */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : BASE;
  }, [title]);
}
