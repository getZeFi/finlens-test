const { transactionQueue } = require("../config/bullmqConfig");
const { fetchTransactions } = require("../utils/apiUtils");

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processTransactions() {
  try {
    const transactions = await fetchTransactions();
    const res = [];
    for (const transaction of transactions) {
      const result = await transactionQueue.add(
        "processTransaction",
        transaction
      );
      res.push(result);
      await delay(100);
    }
    return true;
  } catch (error) {
    console.error("Error processing transactions:", error);
    return false;
  }
}

module.exports = {
  processTransactions,
};
