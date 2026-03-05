import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders multiple headings", () => {
  render(<App />);
  const headings = screen.getAllByRole("heading", { level: 1 });
  expect(headings.length).toBe(5);
});

test("renders multiple buttons", () => {
  render(<App />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBeGreaterThan(2);
});

test("renders multiple inputs", () => {
  render(<App />);
  const inputs = screen.getAllByPlaceholderText("Search user");
  expect(inputs.length).toBe(3);
});

test("renders multiple descriptions", () => {
  render(<App />);
  const descriptions = screen.getAllByTestId("app-description");
  expect(descriptions.length).toBe(2);
});

test("renders multiple list items", () => {
  render(<App />);
  const items = screen.getAllByRole("listitem");
  expect(items.length).toBe(3);
});