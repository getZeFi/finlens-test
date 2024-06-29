const axios = require("axios");

async function fetchTransactions() {
  try {
    const response = await axios.get(
      "https://11a1f1cf-e747-467a-a3ca-ba0ff399ab3a.mock.pstmn.io/transactions"
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
      "https://d701cceb-77bc-479e-b6f8-ee63eb13ebfd.mock.pstmn.io/biller-to-category"
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
