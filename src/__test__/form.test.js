import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormComponent from "../components/formcomponent";

describe("FormComponent - form interactions", () => {

  test("renders headings and inputs", () => {
    render(<FormComponent />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Registration Form");
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  test("radio buttons work correctly", async () => {
    render(<FormComponent />);
    const maleRadio = screen.getByLabelText("Male");
    const femaleRadio = screen.getByLabelText("Female");

    await userEvent.click(maleRadio);
    expect(maleRadio).toBeChecked();
    expect(femaleRadio).not.toBeChecked();

    await userEvent.click(femaleRadio);
    expect(femaleRadio).toBeChecked();
    expect(maleRadio).not.toBeChecked();
  });

  test("checkbox works correctly", async () => {
    render(<FormComponent />);
    const checkbox = screen.getByLabelText("Subscribe to newsletter");
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("shows error if required fields are empty", async () => {
    render(<FormComponent />);
    const button = screen.getByText("Submit");
    await userEvent.click(button);
    expect(screen.getByRole("alert")).toHaveTextContent("Name and Email are required");
  });

 
});