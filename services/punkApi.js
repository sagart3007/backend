const axios = require("axios");
const apiEndpoint = "https://hp-api.onrender.com/api/charactershouse";

//fetchBeerById is used to fetch beer details by Id
const fetchBeerById = async (id) => {
  console.log("fetchBeerById", id);
  try {
    const apiResponse = await axios.get(
      "https://www.fishwatch.gov/api/species/red-snapper"
    );
    console.log("fetchBeerById - Response sent by the PUNK API", apiResponse);
    return apiResponse.data;
  } catch (error) {
    console.log("fetchBeerById - Error Response sent by the PUNK API", error);
  }
};

//fetchRandomBeer is used to fetch random beers
const fetchRandomBeer = async () => {
  const apiResponse = await axios.get(`${apiEndpoint}/random`);
  console.log(
    `fetchRandomBeer - Response sent by the PUNK API ${apiResponse.data}`
  );
  return apiResponse.data;
};

module.exports = { fetchBeerById, fetchRandomBeer };
