class Statement {
    constructor(account) {
        this.account = account
    }

    printStatement() {
        const header = ('date || credit || debit || balance')
        console.log(header)
    }
}


module.exports = Statement