const Statement = require('./Statement.js')
const BankAccount = require('./BankAccount.js')

describe('Statment functionality', () => {
    it('When we add an account it should have one within the statment', () => {
        const account = new BankAccount()
        const statement = new Statement(account)
        expect(statement.account).toBe(account)

    })
});