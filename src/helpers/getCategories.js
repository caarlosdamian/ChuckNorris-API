import Axios from "axios";
const getCategories = async () => {
  const response = await Axios.get(
    "https://api.chucknorris.io/jokes/categories"
  ).catch((err) => {
    console.log(err);
  });
  return response.data;
};

export default getCategories;
