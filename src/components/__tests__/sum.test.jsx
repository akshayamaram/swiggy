import { sum } from "../Sum"

test("sum function should return sum of 2 arguments", () => {
    const result = sum(2, 7);

    expect(result).toBe(9);
})