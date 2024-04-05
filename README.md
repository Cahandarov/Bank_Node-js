Bank Account Management System

This is a simple command-line based bank account management system implemented in Node.js using the fs module for file operations.

Features

Total Balance Inquiry: Check the total balance in the bank account.
Deposit: Deposit a specified amount into the bank account.
Withdrawal: Withdraw a specified amount from the bank account.
Prerequisites

Node.js installed on your machine.

Installation
1. Clone or download the repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running:

npm install

Usage

To run the bank account management system, execute the following command in your terminal:

node bank.js [command] [amount]
[command] can be one of the following:

total: Get the total balance in the bank account.
deposit: Deposit a specified amount into the bank account.
withdraw: Withdraw a specified amount from the bank account.
[amount] is the numerical value of the transaction. It should be provided when using deposit or withdraw commands.

Example Usage

1. Check Total Balance:

node bank.js total

2. Deposit Funds:

node bank.js deposit 100

3. Withdraw Funds:

node bank.js withdraw 50

File Management

The system uses a file named bank.txt to store transaction history. If the file doesn't exist, it will be created. Each transaction is appended to this file in a comma-separated format.

Note

The default currency for this system is assumed to be in USD.
Make sure to provide valid numerical values for deposit and withdrawal amounts.

Contact

If you have any questions, suggestions, or need support, you can contact me through the following:
cahandarov@gmail.com




## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-projectygujhkj
```
    