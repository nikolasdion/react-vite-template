import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello, React headline and counter", () => {
  render(<App />);
  expect(screen.getByText(/Hello, world/i)).toBeInTheDocument();
});
