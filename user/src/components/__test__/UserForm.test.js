import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "../UserForm";

test("It shows two inputs and button", () => {
  // render the component, we need to produce some html to work with
  render(<UserForm />);

  // Manipulate the component or find elements inside that component
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure component is doing what we expected to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
