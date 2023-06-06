    class Statement {
        constructor(account) {
            this.account = account;
        }

        printStatement() {
            const columnWidth = 12;
            const top = '============ || ============ || ============ || ============'
            const end = '============ || ============ || ============ || ============'
            const formattedEnd = top.split(' || ').map(segment => segment.padEnd(columnWidth)).join(' || ');
            const formattedTop = end.split(' || ').map(segment => segment.padEnd(columnWidth)).join(' || ');
            console.log(formattedTop)
            const header = 'date || credit || debit || balance';
            const formattedHeader = header.split(' || ').map(segment => segment.padEnd(columnWidth)).join(' || ');
            console.log(formattedHeader);
            const transactions = this.account.transaction;
            transactions.forEach(({ credit, debit, date, balance }) => {
                const transactionString = `${date.padEnd(columnWidth)} || ${credit ? credit.toFixed(2).padEnd(columnWidth) : ''.padEnd(columnWidth)} || ${debit ? debit.toFixed(2).padEnd(columnWidth) : ''.padEnd(columnWidth)} || ${balance.toFixed(2).padEnd(columnWidth)}`;
                console.log(transactionString);
            });
            console.log(formattedEnd)
        }
    }
    module.exports = Statement;
