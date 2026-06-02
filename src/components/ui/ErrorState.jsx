import Button from "./Button.jsx";
import "./States.css";

/** Estado de error reutilizable, con acción opcional de reintento. */
export default function ErrorState({
  message = "Algo salió mal.",
  action,
  actionLabel = "Reintentar",
  link,
  linkLabel,
}) {
  return (
    <div className="state state--error" role="alert">
      <p className="state__title">⚠ Error</p>
      <p className="state__message">{message}</p>
      <div className="state__actions">
        {action && (
          <Button onClick={action} size="sm">
            {actionLabel}
          </Button>
        )}
        {link && (
          <Button href={link} size="sm" variant="ghost">
            {linkLabel ?? "Abrir enlace"}
          </Button>
        )}
      </div>
    </div>
  );
}
