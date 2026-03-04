import { render, screen, fireEvent } from "@testing-library/react";
import AddUser from "../components/Adduser";

test("shows error if input empty", () => {
  render(<AddUser />);
  fireEvent.click(screen.getByText("Add User"));
  expect(screen.getByText("Name is required")).toBeInTheDocument();
});

test("adds user message on submit", () => {
  render(<AddUser />);
  fireEvent.change(screen.getByPlaceholderText("Enter name"), {
    target: { value: "Tausif" },
  });
  fireEvent.click(screen.getByText("Add User"));
  expect(screen.getByText("User Tausif added")).toBeInTheDocument();
});