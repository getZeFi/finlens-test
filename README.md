# Finlens Test Project

This project is a test setup for the Finlens application. It includes the following components:

- An Express server with an API endpoint.
- A Sequelize model and migration for the Transaction table, including the category column.
- A service for transaction categorization that reads from APIs and uses BullMQ for queuing.
- A worker that processes the queued jobs and inserts categorized transactions into the database.

## Project Structure

finlens-test/
├── src/
│ ├── api/
│ │ └── transactions.js (API endpoint for handling transaction-related requests)
│ ├── config/
│ │ ├── bullmqConfig.js (Configuration for BullMQ, used for job queuing)
│ │ └── database.js (Database configuration for Sequelize)
│ ├── controllers/
│ │ └── transactionController.js (Controller for handling transaction-related logic)
│ ├── migrations/
│ │ └── 124535625-create-transactions.js (Migration file for creating the Transactions table)
│ ├── models/
│ │ ├── index.js (Entry point for Sequelize models)
│ │ └── transaction.js (Sequelize model definition for the Transaction table)
│ ├── services/
│ │ ├── categorizationService.js (Service for categorizing transactions)
│ │ └── transactionService.js (Service for processing transactions)
│ ├── utils/
│ │ └── apiUtils.js (Utility functions for API interactions)
│ ├── workers/
│ │ └── transactionWorker.js (Worker for processing queued transaction jobs)
│ └── index.js (Main entry point for the Express server)
├── .env (Environment variables configuration file)
├── docker-compose.yml (Docker Compose configuration for setting up the environment)
├── Dockerfile (Dockerfile for building the Docker image)
├── package.json (Node.js dependencies and scripts)
├── README.md (Project documentation)
└── test.md (Test documentation or additional notes)

## Setup and Run

To set up and run this project, follow these steps:

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Set up your PostgreSQL database and Redis server.**

3. **Create a `.env` file with your database and Redis connection details:**

   ```
   DB_HOST=your_db_host
   DB_PORT=your_db_port
   DB_USER=your_db_user
   DB_PASS=your_db_password
   DB_NAME=your_db_name
   REDIS_HOST=your_redis_host
   REDIS_PORT=your_redis_port
   ```

4. **Run migrations:**

   ```sh
   npm run migrate
   ```

5. **Start the main server:**

   ```sh
   npm start
   ```

6. **Start the worker in a separate terminal:**
   ```sh
   node src/workers/transactionWorker.js
   ```

## Using Docker

To run the project using Docker, follow these steps:

1. **Build and start the containers:**

   ```sh
   docker-compose up -d
   ```

2. **Check the status of the containers:**

   ```sh
   docker-compose ps
   ```

3. **Stop the containers:**
   ```sh
   docker-compose down
   ```

## Troubleshooting

If you encounter an error indicating that a port is already in use, you can change the host port in the `docker-compose.yml` file. For example, change the host port for the `db` service:

```yaml
services:
  db:
    ports:
      - "5433:5432" # Changed host port to 5433
```
