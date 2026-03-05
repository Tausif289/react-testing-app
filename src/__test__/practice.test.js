import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PracticeComponent from "../components/practice";

describe("PracticeComponent - queries and user interactions", () => {

  // Headings
  test("renders main heading (h1)", () => {
    render(<PracticeComponent />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  test("renders secondary heading (h2)", () => {
    render(<PracticeComponent />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  test("renders tertiary headings (h3)", () => {
    render(<PracticeComponent />);
    const h3s = screen.getAllByRole("heading", { level: 3 });
    expect(h3s.length).toBe(2); // Search + User List
  });

  // Buttons
  test("renders multiple buttons", () => {
    render(<PracticeComponent />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(2);
  });

  // Text content
  test("renders static text content", () => {
    render(<PracticeComponent />);
    expect(screen.getByText("User Management")).toBeInTheDocument();
  });

  // TestId
  test("renders element using test id", () => {
    render(<PracticeComponent />);
    expect(screen.getByTestId("description")).toBeInTheDocument();
  });

  // Inputs
  test("input exists using placeholder", () => {
    render(<PracticeComponent />);
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search user")).toBeInTheDocument();
  });

  test("input exists using label", () => {
    render(<PracticeComponent />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });

  // userEvent typing
  test("user can type in input", async () => {
    render(<PracticeComponent />);
    const input = screen.getByPlaceholderText("Enter name");
    await userEvent.type(input, "Tausif");
    expect(input).toHaveValue("Tausif");
  });

  // Adding a user
  test("user can click Add User button and see alert", async () => {
    render(<PracticeComponent />);
    const input = screen.getByPlaceholderText("Enter name");
    await userEvent.type(input, "Tausif");
    await userEvent.click(screen.getByText("Add User"));
    expect(screen.getByRole("alert")).toHaveTextContent(
      "User added successfully"
    );
  });

  // Input clears after submit
  test("input clears after adding user", async () => {
    render(<PracticeComponent />);
    const input = screen.getByPlaceholderText("Enter name");
    await userEvent.type(input, "Tausif");
    await userEvent.click(screen.getByText("Add User"));
    expect(screen.queryByDisplayValue("Tausif")).not.toBeInTheDocument();
  });

  // Query for missing text
  test("queryByText returns null when text not present", () => {
    render(<PracticeComponent />);
    expect(screen.queryByText("Random")).not.toBeInTheDocument();
  });

  // Async list items appear
  test("findByText async user appears", async () => {
    render(<PracticeComponent />);
    const user = await screen.findByText("John");
    expect(user).toBeInTheDocument();
  });

  test("findAllByRole returns list items", async () => {
    render(<PracticeComponent />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(2);
  });

  // Loading disappears
  test("loading disappears after async fetch", async () => {
    render(<PracticeComponent />);
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );
  });

  // Links
  test("link exists using role", () => {
    render(<PracticeComponent />);
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
  });

  test("multiple links exist", () => {
    render(<PracticeComponent />);
    expect(screen.getAllByRole("link").length).toBe(2);
  });
});