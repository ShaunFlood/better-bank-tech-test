const BankAccount = require ('./BankAccount.js')

    describe('Bank account functionality', () => {
        it('When we check the balance it should return 0', () => {
        account = new BankAccount();
        expect(account.getBalance()).toBe(0);
        })
    })
    describe('Deposit functionality on bank account', () => {
        it('When we deposit money the balance increase', () => {
            account = new BankAccount();
            account.deposit(500);
            expect(account.getBalance()).toBe(500)
        })
    })
    describe('Withdrawing funcationality on bank account', () => {
        it('When we withdraw money the balance decreases', () => {
            account = new BankAccount();
            account.deposit(500);
            account.withdraw(300)
            expect(account.getBalance()).toBe(200)
        })
    })