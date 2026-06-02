import "./Card.css";

/**
 * Card tipo viñeta de manga: borde de tinta + sombra dura tipo cómic.
 * - `featured` agranda y resalta (para el proyecto estrella).
 * - `as` permite cambiar el elemento contenedor (ej. "article", "li").
 */
export default function Card({
  children,
  featured = false,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const classes = `card ${featured ? "card--featured" : ""} ${className}`.trim();
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
