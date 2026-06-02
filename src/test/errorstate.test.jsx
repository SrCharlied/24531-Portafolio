import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ErrorState from "../components/ui/ErrorState.jsx";

describe("ErrorState", () => {
  it("muestra el mensaje de error", () => {
    render(<ErrorState message="Falló la carga" />, { wrapper: MemoryRouter });
    expect(screen.getByRole("alert")).toHaveTextContent(/falló la carga/i);
  });

  it("dispara la acción de reintento al hacer clic", async () => {
    const user = userEvent.setup();
    const onRetry = vi.fn();
    render(<ErrorState message="Error" action={onRetry} />, {
      wrapper: MemoryRouter,
    });
    await user.click(screen.getByRole("button", { name: /reintentar/i }));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
