import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App.jsx";

describe("Enrutamiento", () => {
  it("renderiza la página About en /about", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", { level: 1, name: /sobre mí/i })
    ).toBeInTheDocument();
  });

  it("muestra la página 404 en una ruta inexistente", () => {
    render(
      <MemoryRouter initialEntries={["/ruta-que-no-existe"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", { level: 1, name: /404/ })
    ).toBeInTheDocument();
  });
});
