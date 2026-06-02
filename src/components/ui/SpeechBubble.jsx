import "./SpeechBubble.css";

/**
 * Bocadillo tipo cómic con cola. Decorativo pero legible.
 * - `tail`: posición de la cola — "bottom-left" (default) | "bottom-right"
 */
export default function SpeechBubble({
  children,
  tail = "bottom-left",
  className = "",
}) {
  return (
    <div className={`bubble bubble--${tail} ${className}`.trim()}>
      {children}
    </div>
  );
}
