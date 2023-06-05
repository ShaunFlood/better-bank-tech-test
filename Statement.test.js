const Statement = require('./Statement.js')
const BankAccount = require('./BankAccount.js')

describe('Statment functionality', () => {
    it('When we add an account it should have one within the statment', () => {
        const account = new BankAccount()
        const statement = new Statement(account)
        expect(statement.account).toBe(account)
    })
    it('When we try to print the statement it should show the header', () => {
        const account = new BankAccount()
        const statement = new Statement(account)
        console.log = jest.fn();
        statement.printStatement();
        expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
    })
    it('When we try to print out a transaction thats a withdrawal it does not show a in the debt', () => {
        const account = new BankAccount()
        account.balance = 400
        account.withdraw(200)
        const statement = new Statement(account)
        console.log = jest.fn();
        statement.printStatement();
        expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
        expect(console.log).toHaveBeenCalledWith(`${new Date().toLocaleDateString()} || || 200 || 200`)
    });
});