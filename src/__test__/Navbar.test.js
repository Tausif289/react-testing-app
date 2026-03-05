import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("renders navbar heading", () => {
  render(<Navbar />);
  expect(screen.getByText("User Dashboard")).toBeInTheDocument();
});

test("renders navbar paragraphs", () => {
  render(<Navbar />);
  const paragraphs = screen.getAllByText(/user/i);
  expect(paragraphs.length).toBeGreaterThan(0);
});

test("renders navbar buttons", () => {
  render(<Navbar />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(4);
});

test("renders navbar links", () => {
  render(<Navbar />);
  const links = screen.getAllByRole("link");
  expect(links.length).toBe(2);
});