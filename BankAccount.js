class BankAccount {
    constructor(){
        this.balance = 0;
        this.transaction = []
    }
    getBalance() {
        return this.balance
    }
    deposit(number) {
        if (number <= 0 || number >= 10000) {
            throw new Error('Invalid deposit amount')
        }
        this.balance += number;
        const transaction = { date: new Date().toLocaleDateString(), credit: number, debit: null, balance: this.balance}
        this.transaction.push(transaction)
        
    }
    withdraw(number) {
        if (number <= 0 || number > this.balance) {
            throw new Error('Invalid withdrawal amount')
        }
        this.balance -= number;
        const transaction = { date: new Date().toLocaleDateString(), credit: null, debit: number, balance: this.balance }
        this.transaction.push(transaction)
    }
}

module.exports = BankAccount;