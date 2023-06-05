class Statement {
    constructor(account) {
        this.account = account
    }

    printStatement() {
        const header = ('date || credit || debit || balance')
        console.log(header)
        const transactions = this.account.transaction;
        transactions.forEach(({ date, type, number, balance }) => {
            const credit = type === 'credit' ? number.toFixed(2) : '' ;
            const debit = type === 'debit' ? number.toFixed(2) : '' ;
            const string = `${date} || ${credit} || ${debit} || ${balance}`;
            console.log(string);
        });
    }
       
}


module.exports = Statement