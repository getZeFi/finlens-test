const { sequelize } = require("../config/databaseConfig");
const { fetchBillerToCategory } = require("../utils/apiUtils");
const Transaction = require("../models/Transaction");

async function categorizeTransactions() {
  try {
    const billerToCategory = await fetchBillerToCategory();
    const transactions = await Transaction.findAll();

    // Logic to categorize transactions using billerToCategory data

    // Example:
    transactions.forEach((transaction) => {
      // categorization logic using billerToCategory
    });

    // Example: Saving categorized transactions
    // await Promise.all(transactions.map(transaction => transaction.save()));

    return true;
  } catch (error) {
    console.error("Error categorizing transactions:", error);
    return false;
  }
}

module.exports = {
  categorizeTransactions,
};
