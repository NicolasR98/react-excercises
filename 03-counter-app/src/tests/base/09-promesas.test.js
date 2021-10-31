import { getHeroeByIdAsync } from "../../base/09-promesas";
import { heroes } from "../../data/heroes";

describe("test with promises", () => {
  test("should return a hero", () => {
    const id = 1;
    return getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroes[0]);
    });
  });

  test("Should return error if the hero doesn't exist", (done) => {
    const id = 99;
    getHeroeByIdAsync(id)
      .catch((error) => {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(error).toBe("No se pudo encontrar el héroe");
        done()
      });
  });
});
