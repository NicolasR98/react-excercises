const createImageElement = (url) => {
  const image = document.createElement("img");
  image.src = url;
  document.body.append(image);
};

const getImagen = async () => {
  try {
    const API_KEY = "nKqbfWjdlPnOusoIhA9I5Fbs0q4YBvID";
    const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const response = await fetch(URL);
    const { data } = await response.json();
    const { url } = data.images.original;

    createImageElement(url);
  } catch (error) {
    console.error(error);
  }
};

getImagen();

