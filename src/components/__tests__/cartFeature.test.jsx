import { fireEvent, render, screen } from "@testing-library/react";
import RestaurentMenu from "../RestaurentMenu";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/resMenuMockData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA)
    },
  });
});

it("should load restaurent menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Match Time Sharing Combos (20)")
  fireEvent.click(accordianHeader)

  const dishCard = screen.getAllByTestId("dish-card")
  expect(dishCard.length).toBe(20); // As per the mock data there are 20 cards in the list

  const cartCounterBefore = screen.getByText("( 0 )")
  expect(cartCounterBefore).toBeInTheDocument()

  const addBtn = screen.getAllByRole("button", { name: "Add +" })
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("( 1 )")).toBeInTheDocument()

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("( 2 )")).toBeInTheDocument()

  expect(screen.getAllByTestId("dish-card").length).toBe(2)

  fireEvent.click(screen.getByRole("button", {name: "clear"}))

});
