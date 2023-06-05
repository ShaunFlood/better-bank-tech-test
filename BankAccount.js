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
        this.balance += number;
        const transaction = { date: new Date().toLocaleDateString(), type: 'credit', number, balance: this.balance}
        this.transaction.push(transaction)
        
    }
    withdraw(number) {
        if (number <= 0 || number > this.balance) {
            throw new Error('Invalid withdrawal amount')
        }
        this.balance -= number;
        const transaction = { date: new Date().toLocaleDateString(), type: 'debt', number }
        this.transaction.push(transaction)
    }
}

module.exports = BankAccount