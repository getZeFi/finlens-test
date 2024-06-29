-- SQL to create a transactions table
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    biller VARCHAR(255),
    memo TEXT,
    amount DECIMAL(10, 2) NOT NULL,
    source VARCHAR(100)
);
