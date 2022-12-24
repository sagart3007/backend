const redis = require("redis");
const { fetchBeerById } = require("./punkApi");

let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

const getBeerById = async (request, response) => {
  try {
    let beerDetails;
    let isCached = false;
    const cacheResults = await redisClient.get(request.params.id);
    if (cacheResults) {
      isCached = true;
      beerDetails = JSON.parse(cacheResults);
    } else {
      const beerDetails = await fetchBeerById(request.params.id);
      console.log(`beerDetails - ${beerDetails}`);
      await redisClient.set(request.params.id, JSON.stringify(beerDetails));
    }

    response.send({
      status: 200,
      isCached: isCached,
      message: "success",
      data: beerDetails,
    });
  } catch (error) {
    response.send(error);
  }
};

module.exports = { getBeerById };
