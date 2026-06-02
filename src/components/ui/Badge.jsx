import "./Badge.css";

/**
 * Etiqueta pequeña para tecnologías o categorías.
 * Variantes de acento: "default" | "accent" | "accent-2" | "emphasis"
 */
export default function Badge({ children, variant = "default", className = "" }) {
  return (
    <span className={`badge badge--${variant} ${className}`.trim()}>
      {children}
    </span>
  );
}
