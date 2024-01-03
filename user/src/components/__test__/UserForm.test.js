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

test("its should call an onUserAdd(), when form is subitted", () => {
  // Not the best implementation
  const argList = [];
  const callBack = (...args) => {
    return argList.push(args);
  };
  // try to render my component
  render(<UserForm onUserAdd={callBack} />);

  // finds two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // simulate typing in name
  user.click(nameInput);
  user.keyboard("jane");

  // simulate typing in email
  user.click(emailInput);
  user.keyboard("jane@gamil.com");

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  user.click(button);

  // Assertion to make sure 'onUserAdd' get called with email/name
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: "jane", email: "jane@gamil.com" });
});
