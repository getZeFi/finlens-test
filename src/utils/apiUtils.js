const axios = require("axios");

async function fetchTransactions() {
  try {
    const response = await axios.get(
      "https://a56171ae-06c3-4ce5-a940-2650bd4bf256.mock.pstmn.io/transactions"
    );
    // console.log("check-4", response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch transactions");
  }
}

async function fetchBillerToCategory() {
  try {
    const response = await axios.get(
      "https://08c6c5e8-cb6f-49c4-9b37-626b4a70f1af.mock.pstmn.io/biller-to-category"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch biller-to-category data");
  }
}

module.exports = {
  fetchTransactions,
  fetchBillerToCategory,
};
