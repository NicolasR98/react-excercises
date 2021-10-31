import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import { heroes } from "../../data/heroes";

describe("Tests on getHeroeById", () => {
  test("Should return a heroe by id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Should return undefined if an heroe does not exist", () => {
    const heroe = getHeroeById(999);

    expect(heroe).toBe(undefined);
  });
});

describe("Tests on getHeroesByOwner", () => {
  test("Should return an array with DC heroes", () => {
    const owner = "DC";
    const heroesDC = getHeroesByOwner(owner);
    const heroesDCFiltered = heroes.filter((heroe) => heroe.owner === owner);

    expect(heroesDC).toEqual(heroesDCFiltered);
  });

  test("Should return the same length of heroes of Marvel as the database", () => {
    const owner = "Marvel";
    const heroesMarvel = getHeroesByOwner(owner);
    const heroesMarvelFiltered = heroes.filter(
      (heroe) => heroe.owner === owner
    );

    expect(heroesMarvel.length).toBe(heroesMarvelFiltered.length);
  });
});
