DROP DATABASE IF EXISTS expenseTracker_db;
CREATE DATABASE expenseTracker_db;
USE expenseTracker_db;

CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    manager VARCHAR(50)
);

CREATE TABLE receipt (
    id VARCHAR(50) PRIMARY KEY,
    user VARCHAR(50) NOT NULL,
    transaction_date DATE NOT NULL,
    transaction_type VARCHAR(10) NOT NULL,
    transaction_number VARCHAR(30) NOT NULL,
    amount DECIMAL(19,2) NOT NULL,
    tax DECIMAL(19,2) NOT NULL,
    vendor VARCHAR(50) NOT NULL,
    category VARCHAR(30) NOT NULL,
    description VARCHAR(500) NOT NULL,
    justification VARCHAR(500) NOT NULL
);