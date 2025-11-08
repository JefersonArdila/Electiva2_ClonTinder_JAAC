// App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock de CSS para que Jest no intente procesarlo
jest.mock("./components/AuthForm.css", () => ({}));

test("renders app without crashing", () => {
  render(<App />);
  // Cambia esto según algo que realmente renderice tu App
  const element = screen.getByText(/descubrir/i) || screen.getByText(/matches/i);
  expect(element).toBeInTheDocument();
});
