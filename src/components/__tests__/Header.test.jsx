import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"}) /** if i have mmore buttons & want to check it by parameters such as name etc */

  expect(loginButton).toBeInTheDocument()

});

it("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login",}); /** if i have mmore buttons & want to check it by parameters such as name etc */
  fireEvent.click(loginButton) /** simulating  the user clicking the login button */;
  const logoutButton = screen.getByRole("button", {name: "Logout"});
  expect(logoutButton).toBeInTheDocument();
});
