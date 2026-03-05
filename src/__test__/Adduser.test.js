import { render, screen, fireEvent } from "@testing-library/react";
import AddUser from "../components/Adduser";

test("renders form elements", () => {
  render(<AddUser />);

  expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  expect(screen.getByRole("combobox")).toBeInTheDocument();
  expect(screen.getByRole("checkbox")).toBeInTheDocument();
});

test("shows error if name is empty", () => {
  render(<AddUser />);

  fireEvent.click(screen.getByText("Add User"));

  expect(screen.getByText("Name is required")).toBeInTheDocument();
});

test("adds user successfully", () => {
  render(<AddUser />);

  fireEvent.change(screen.getByPlaceholderText("Enter name"), {
    target: { value: "Tausif" },
  });

  fireEvent.click(screen.getByRole("checkbox"));

  fireEvent.click(screen.getByText("Add User"));

  expect(screen.getByText(/User Tausif added/)).toBeInTheDocument();
});