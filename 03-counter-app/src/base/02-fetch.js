const API_KEY = "nKqbfWjdlPnOusoIhA9I5Fbs0q4YBvID";

const httpRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

httpRequest
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const image = document.createElement('img');
    image.src = url;
    document.body.append(image)
  })
  .catch(console.warn);
