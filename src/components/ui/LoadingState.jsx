import "./States.css";

/** Estado de carga reutilizable. */
export default function LoadingState({ message = "Cargando…" }) {
  return (
    <div className="state state--loading" role="status" aria-live="polite">
      <span className="state__spinner" aria-hidden="true" />
      <p className="state__message">{message}</p>
    </div>
  );
}
