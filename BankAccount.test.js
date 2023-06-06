const BankAccount = require('./BankAccount.js')

    describe('Bank account functionality', () => {
        it('When we check the balance it should return 0', () => {
            account = new BankAccount();
            expect(account.getBalance()).toBe(0);
        })
        it('It should have an attempty array for a transaction', () => {
            account = new BankAccount();
            expect(account.transaction).toEqual([])
        })
    })
    describe('Transaction functionality', () => {
        it('When we do a deposit should send the information of the type of credit to the array and the value amount', () => {
            account = new BankAccount();
            account.deposit(1000)
            expect(account.transaction.map(t => t.credit)).toEqual([1000])
        })
        it('When we do a deposit it should contain the current date', () => {
            account = new BankAccount();
            account.deposit(1000)
            expect(account.transaction.map(t => t.date)).toContainEqual(new Date().toLocaleDateString())
        })
        it('When we do a deposit it should contain the current balance', () => {
            account = new BankAccount();
            account.deposit(1000)
            expect(account.transaction.map(t => t.balance)).toContain(1000)
        })
        it('When we do a withdrawal should send the infromation of the type of debit to the array and the value amount', () => {
            account = new BankAccount();
            account.balance = 1000
            account.withdraw(500)
            expect(account.transaction.map(t => t.debit)).toEqual([500])
        })
        it('When we do a withdrawal should send the infromation of the date to the array', () => {
            account = new BankAccount();
            account.balance = 1000
            account.withdraw(500)
            expect(account.transaction.map(t => t.date)).toContainEqual(new Date().toLocaleDateString())
        })
        it('When we do a withdrawal should send the information of the balance to the array', () => {
            account = new BankAccount();
            account.balance = 1000
            account.withdraw(500)
            expect(account.transaction.map(t => t.balance)).toContain(500)

        })
    })
    describe('Deposit functionality on bank account', () => {
        it('When we deposit money the balance increase', () => {
            account = new BankAccount();
            account.deposit(500);
            expect(account.getBalance()).toBe(500)
        })
        it('When we try to deposit a negative number, then throw an error', () => {
            account = new BankAccount();
            expect(() => {
                account.deposit(-500);
            }).toThrow('Invalid deposit amount');
        })
        it('When we deposit  10000 or more, then throw an error', () => {
            account = new BankAccount();
            expect(() => {
                account.deposit(10000);
            }).toThrow('Invalid deposit amount')
        })
    })
    describe('Withdrawing funcationality on bank account', () => {
        it('When we withdraw money the balance decreases', () => {
            account = new BankAccount();
            account.deposit(500);
            account.withdraw(300)
            expect(account.getBalance()).toBe(200)
        })
        it('When we try to withdraw a negative number, then throw an error', () => {
            account = new BankAccount();
            expect(() => {
                account.withdraw(-1000);
            }).toThrow('Invalid withdrawal amount');
        })
        it('When we try to withdraw a number more than the balance, then throw an error', () => {
            account = new BankAccount();
            account.deposit(500)
            expect(() => {
                account.withdraw(600);
            }).toThrow('Invalid withdrawal amount')
        })
    })