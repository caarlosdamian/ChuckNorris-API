import Axios from "axios";
const getJokeFromCategory = async (categorie) => {
  const response = await Axios.get(
    `https://api.chucknorris.io/jokes/search?query=${categorie}`
  ).catch((err) => {
    console.log(err);
  });
  const result = response.data.result;
  const joke = result[Math.floor(Math.random() * result.length)];
  return joke;
};

export default getJokeFromCategory;
