# Finlens Test Project

## Project Statement

This project serves as a test setup for the Finlens application. The candidate is required to set up the database and server locally, following the steps provided below. The current code represents an inefficient implementation for fetching transactions from an API, categorizing them, and saving them into the database. Currently, it takes a significant amount of time to process 3,000 transactions.

## Objective

The candidate must write an optimized version of the code. The setup is designed to allow scalable processing of transactions, enabling multiple worker processes to handle the categorization queue in parallel. The candidate is expected to:

1.Implement an optimized version of the provided code.

2.Write performance hooks to log the execution time of the current inefficient version.

3.Compare and monitor the performance of the optimized version using the same performance hooks.

4.Provide a screen recording or screenshots demonstrating the performance metrics and terminal logs.

### The Project code includes the following components:

- An Express server with an API endpoint.
- A Sequelize model and migration for the Transaction table, including the category column.
- A service for transaction categorization that reads from APIs and uses BullMQ for queuing.
- A worker that processes the queued jobs and inserts categorized transactions into the database.

## Project Structure
<img width="609" alt="Screenshot 2024-12-19 at 3 09 08 PM" src="https://github.com/user-attachments/assets/160c0ff5-0c9c-46f6-a776-2020f71b1560" />


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
