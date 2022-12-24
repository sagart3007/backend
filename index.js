const express = require("express");
const redis = require("redis");

const { getBeerById } = require("./services/getBeerById");

const app = express();
const port = process.env.PORT || 3000;

let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

app.get("/beer/:id", getBeerById);

app.listen(port, () => {
  console.log(`App is listening on port - ${port}`);
});
