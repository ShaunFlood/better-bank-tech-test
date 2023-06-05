class Statement {
    constructor(account) {
        this.account = account;
    }

    printStatement() {
        const header = 'date || credit || debit || balance';
        console.log(header);
        const transactions = this.account.transaction;
        transactions.forEach(({ credit, debit, date, balance }) => {
            const transactionString = `${date} || ${credit ? credit.toFixed(2) : ''} || ${debit ? debit.toFixed(2) : ''} || ${balance.toFixed(2)}`;
            console.log(transactionString);
        });
    }
    
}
module.exports = Statement;