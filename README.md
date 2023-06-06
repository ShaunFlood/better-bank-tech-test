# better-bank-tech-test
I'm challenging myself to re-do an tech test tech that was completed with makers.

##Requirements

You should be able to interact with the your code via a REPL like IRB or the JavaScript console
You don't need to implement a command line interface that takes input from STDIN
Must have features for deposits and withdrawal
Must have a feature to display account statement (date, amount, balance)
Data can be kept in memory (it doesn't need to be stored to a database or anything)

## Acceptance criteria


Given a client makes a deposit of 1000 on 10-01-2012 And a deposit of 2000 on 13-01-2012 And a withdrawal of 500 on 14-01-2012 When she prints her bank statement Then she would see:
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00

## Planning 

I previous compelted this task on makers [here]((https://github.com/ShaunFlood/bank-tech-test)), but I wanted to attempt the challenge again and go further than the mvp that was provided by adding my own extra functionalities that would make sense in comparision to a bank account/atm.

I started by doing a simple diagram of how I waned to spilt the functionality between two classes and what addtional functionalities I wanted within in the project.

I've also focused on commiting before every failed test and passed test with commits to keep it consistent with addtional commits if there was a bug or a change needed.

<img width="1440" alt="Screenshot 2023-06-06 at 20 49 13" src="https://github.com/ShaunFlood/better-bank-tech-test/assets/117595516/bd835218-3fc1-418b-b418-54b29f9bc7f7">

## How to use 

### Installing and testing

In the terminal of the folder input:
1) nvm install node
2) nvm use node
3) npm install jest
4) jest - this step is optional if you want to run the test.

<img width="411" alt="Screenshot 2023-06-06 at 19 02 30" src="https://github.com/ShaunFlood/better-bank-tech-test/assets/117595516/c66a8d86-3427-45a8-85f8-becdd764479a">

### Running the application

You need to be in the directory of the files for this to work

1)node
2)const BankAccount = require('./BankAccount')
3)const Statement = require('./Statement')
4)const account = new BankAccount

### Bank Account functionality (optional)

All bank account start at a nil balance, so withdrawing when having a nil balance will throw an error

5) To make a deposit you use account.(deposit), which puts money in the account:
6)To make a withdrawal you use account.(withdraw):, which takes money out of the account
7) Check the balance of the account by account.getBalance();
8) You can alter the amount of the balance without the functions like this:
    account.balance = 500, which would make it 500 instead of the starting amount of 0
    
### Statement Account functionality (optional)

9) const statement = new Statement(account) 
    this puts the bank account in to the statment generator
    
10) statement.printStatement();

An example of this is below.

<img width="331" alt="Screenshot 2023-06-06 at 20 38 53" src="https://github.com/ShaunFlood/better-bank-tech-test/assets/117595516/b1d48555-1e0c-426a-b611-b8f1720b79d9">
  
