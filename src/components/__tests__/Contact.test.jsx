import { screen, render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact page test cases", () => {  /** describe block is just grouping of test cases under a name or tag kinda */

/** test alias it both are same */

  test("should load contact component", () => {
    render(<Contact />);
    /** this is called as QUERYING  */
    const heading = screen.getByRole("heading");
    /** this is called as ASSERTION */
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should load all the input boxes in the contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(3);
  });
})


/** NOTE: There are also some functions which jest gives us such as 
 * beforeAll(() => {console.log("watever u want to do before runnning "ALL" the test cases")})
 * beforeEach(() => {console.log("watever u want to do befor running "EACH" test case")})
 * afterAll(() => {console.log("watever u want to do after "ALL" the test cases" ran)})
 * afterEach(() => {console.log("watever u want to do after "Each" test case ran)})
 */