const BankAccount = require ('./BankAccount.js')

    describe('Bank account functionality', () => {
        it('When we check the balance it should return 0', () => {
        account = new BankAccount();
        expect(account.getBalance()).toBe(0);
        })
    })