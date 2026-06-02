import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Projects from "../pages/Projects.jsx";

function renderProjects() {
  return render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>
  );
}

describe("Página Projects", () => {
  it("lista los proyectos incluyendo SeeleScans", () => {
    renderProjects();
    expect(
      screen.getByRole("heading", { name: /seelescans/i })
    ).toBeInTheDocument();
  });

  it("muestra el estado vacío cuando la búsqueda no coincide", async () => {
    const user = userEvent.setup();
    renderProjects();
    const search = screen.getByPlaceholderText(/buscar por nombre/i);
    await user.type(search, "zzzznoexiste");
    expect(screen.getByText(/sin resultados/i)).toBeInTheDocument();
  });
});
