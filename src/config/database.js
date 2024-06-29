require("dotenv").config();

module.exports = {
  development: {
    username: "test",
    password: "test123",
    database: "test_finlens",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
