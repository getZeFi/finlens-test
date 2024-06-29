const express = require("express");
const { sequelize } = require("./models");
const transactionController = require("./controllers/transactionController");
const redis = require("redis");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/transactions", transactionController);

// Redis client configuration
const redisClient = redis.createClient({
  host: "localhost", // Changed from "redis" to "localhost"
  port: 6379,
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
});

// Database Sync and App Start
sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
