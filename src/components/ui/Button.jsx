import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Botón polimórfico con estética manga/arcade sobria.
 * - `to`   → enlace interno (React Router Link)
 * - `href` → enlace externo (<a>, abre en pestaña nueva)
 * - sin ambos → <button>
 *
 * Variantes: "primary" (default) | "ghost"
 * Tamaños: "md" (default) | "sm"
 */
export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
