const Statement = require('./Statement.js')
const BankAccount = require('./BankAccount.js')

describe('Statement functionality', () => {
    it('When we add an account it should have one within the statement', () => {
        const account = new BankAccount()
        const statement = new Statement(account)
        expect(statement.account).toBe(account)
    });
    it('When we try to print the statement it should show the header', () => {
        const account = new BankAccount()
        const statement = new Statement(account)
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        statement.printStatement();
        expect(logSpy).toHaveBeenCalledWith("date         || credit       || debit        || balance     ");
        logSpy.mockRestore();
    });
    it('When we try to print out a transaction that is a deposit, it should not show any credit', () => {
        const account = new BankAccount();
        const statement = new Statement(account)
        const logSpy = jest.spyOn(global.console, 'log').mockImplementation(); 
        account.deposit(1000)
        statement.printStatement();  
        expect(logSpy).toHaveBeenCalledWith((`${new Date().toLocaleDateString()}     || 1000.00      ||              || 1000.00     `))
        logSpy.mockRestore();
    });
    it('When we try to print out a transaction that is a withdrawal, it should not show any debit', () => {
        const account = new BankAccount();
        const statement = new Statement(account)
        const logSpy = jest.spyOn(console, 'log').mockImplementation();
        account.balance = 5000;
        account.withdraw(2000)
        statement.printStatement();
        expect(logSpy).toHaveBeenCalledWith("date         || credit       || debit        || balance     ");
        expect(logSpy).toHaveBeenCalledWith((`${new Date().toLocaleDateString()}     ||              || 2000.00      || 3000.00     `))
        logSpy.mockRestore();
    });
});