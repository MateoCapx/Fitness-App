export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e5eb4ef180mshbf601c540e61cb2p1b592bjsnf529ab523414",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

// figure out how to create an enviorment varabile REACT_APP_RAPID_API_KEY

// const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "e5eb4ef180mshbf601c540e61cb2p1b592bjsnf529ab523414",
//     "x-rapidapi-host": "exercisedb.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
