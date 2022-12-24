const redis = require("redis");

let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

const getDataFromCache = async () => {
  const cacheResults = await redisClient.get(species);
  if (cacheResults) {
    isCached = true;
    results = JSON.parse(cacheResults);
  }
};

module.exports = { getDataFromCache };
