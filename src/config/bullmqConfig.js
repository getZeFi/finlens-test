// config/bullmqConfig.js

const { Queue } = require("bullmq");
const Redis = require("ioredis");

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379"; // Use environment variable or default to local

const redisClient = new Redis(redisUrl); // Use ioredis for Redis connection

redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
});

redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

const transactionQueue = new Queue("transactionQueue", {
  connection: redisClient,
});

module.exports = {
  transactionQueue,
};
