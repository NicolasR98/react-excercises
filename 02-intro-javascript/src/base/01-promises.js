import { heroes } from "../data/heroes";

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      heroe ? resolve(heroe) : reject(`Can't find that hero`);
    }, 2000);
  });
};

getHeroeByIdAsync(4)
  .then(console.log)
  .catch(console.warn);
