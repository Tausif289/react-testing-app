import { render, screen } from "@testing-library/react";
import UserList from "../components/UserList";

test("renders users from API", async () => {
  render(<UserList />);

  expect(await screen.findByText("Tausif")).toBeInTheDocument();
  expect(await screen.findByText("Nehal")).toBeInTheDocument();
});