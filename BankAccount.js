class BankAccount {
    constructor(){
        this.balance = 0;
    }
    getBalance() {
        return this.balance
    }
    deposit(number) {
        this.balance += number;
    }
    withdraw(number) {
        this.balance -= number;
    }
}

module.exports = BankAccount