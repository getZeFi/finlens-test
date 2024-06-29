const express = require("express");
const router = express.Router();
const { processTransactions } = require("../services/transactionService");

router.post("/process-transactions", async (req, res) => {
  try {
    const result = await processTransactions();
    if (result) {
      res
        .status(200)
        .json({ message: "Transactions processing started successfully" });
    } else {
      res.status(500).json({ error: "Failed to start transaction processing" });
    }
  } catch (error) {
    console.error("Error processing transactions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
