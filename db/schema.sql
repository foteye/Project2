DROP DATABASE IF EXISTS expenseTracker_db;
CREATE DATABASE expenseTracker_db;
USE expenseTracker_db;

CREATE TABLE User (
    id VARCHAR(50) PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    manager VARCHAR(50)
);

CREATE TABLE Receipt (
    id VARCHAR(50) PRIMARY KEY,
    user VARCHAR(50) NOT NULL,
    transactionDate DATE NOT NULL,
    transactionType VARCHAR(10) NOT NULL,
    transactionNumber VARCHAR(30) NOT NULL,
    amount DECIMAL(19,2) NOT NULL,
    tax DECIMAL(19,2) NOT NULL,
    vendor VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    justification VARCHAR(500) NOT NULL
);