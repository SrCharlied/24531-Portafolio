import { usePageTitle } from "../hooks/usePageTitle.js";

export default function Tech() {
  usePageTitle("Tecnologías");
  return (
    <div className="page container">
      <h1>Tecnologías</h1>
      <p>
        Stack del portafolio y por qué se eligió cada pieza. El detalle
        argumentado llega en la siguiente fase.
      </p>
    </div>
  );
}
