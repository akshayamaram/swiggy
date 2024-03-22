import Hero from "../Hero";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resListMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/** this is we are trying to implement fetch function since it's not available in the test environment */
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should make sure the search functionality is working properly for hotel text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      )
    );

    const cardsBeforeSearch = screen.getAllByTestId("res-card")
    expect(cardsBeforeSearch.length).toBe(20)

    const searchBtn = screen.getByTestId("search-btn")
    const searchInput = screen.getByTestId("search-input")

    fireEvent.change(searchInput, {target: {value: "hotel"}})
    fireEvent.click(searchBtn)

    const cardsAfterSearch = screen.getAllByTestId("res-card")

    expect(cardsAfterSearch.length).toBe(4);
  
});


it("should filter top rated restaurents", async () => {
    await act(async () =>{
        render(
            <BrowserRouter>
                <Hero/>
            </BrowserRouter>
        )
    })

    const cardsBeforeFilter = screen.getAllByTestId("res-card")
    expect(cardsBeforeFilter.length).toBe(20)

    const filterBtn = screen.getByTestId("filter-btn")
    fireEvent.click(filterBtn)

    const cardsAfterFilter = screen.getAllByTestId("res-card")
    expect(cardsAfterFilter.length).toBe(11);
})