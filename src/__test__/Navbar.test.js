import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("renders navbar title", () => {
  render(<Navbar />);
  expect(screen.getByText("User Dashboard")).toBeInTheDocument();
});