const { Worker, QueueEvents } = require("bullmq");
const { sequelize } = require("../config/databaseConfig");
const Transaction = require("../models/Transaction");

const worker = new Worker("transactionQueue", async (job) => {
  try {
    // Example processing logic, you can adjust based on your needs
    console.log("Processing transaction:", job.data);

    // Example: Save transaction to database
    // const newTransaction = await Transaction.create(job.data);
    // console.log('Transaction saved:', newTransaction.toJSON());

    return true;
  } catch (error) {
    console.error("Error processing transaction:", error);
    return false;
  }
});

const queueEvents = new QueueEvents("transactionQueue");
queueEvents.on("completed", async (jobId, result) => {
  console.log(`Job ${jobId} completed successfully:`, result);
});

process.on("SIGINT", async () => {
  await worker.close();
  await queueEvents.close();
  await sequelize.close();
  process.exit(0);
});
