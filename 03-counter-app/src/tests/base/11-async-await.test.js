import { API_KEY, getImagen } from "../../base/11-async-await";


describe("Test with async funcs", () => {
  test("Should return the url of the img", async () => {
    const url = await getImagen(API_KEY);
    expect(typeof url).toBe("string");
  });
});
