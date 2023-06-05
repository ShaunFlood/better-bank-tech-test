class BankAccount {
    constructor(){
        this.balance = 0;
        this.transaction = []
    }
    getBalance() {
        return this.balance
    }
    deposit(number) {
        if (number <= 0) {
            throw new Error('Invalid deposit amount')
        }
        const transaction = { date: new Date(), type: 'credit', number}
        this.transaction.push(transaction)
        this.balance += number;
    }
    withdraw(number) {
        if (number <= 0 || number > this.balance) {
            throw new Error('Invalid withdrawal amount')
        }
        this.balance -= number;
    }
}

module.exports = BankAccount