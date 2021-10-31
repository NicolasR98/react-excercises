import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-deses-arr";

describe("Tests on destructuring", () => {
  test("retornaArreglo must return a string and a number", () => {
    const [string, number] = retornaArreglo();

    expect(typeof number).toBe("number");
    expect(typeof string).toBe("string");
  });
});
