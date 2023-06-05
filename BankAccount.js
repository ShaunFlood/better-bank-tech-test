class BankAccount {
    constructor(){
        this.balance = 0;
    }
    getBalance() {
        return this.balance
    }
    deposit(number) {
        if (number <= 0)
            throw new Error('Invalid deposit amount')
        this.balance += number;
    }
    withdraw(number) {
        this.balance -= number;
    }
}

module.exports = BankAccount