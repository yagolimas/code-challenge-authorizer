import Transaction from './Transaction'

export default class Account {

    activeCard: boolean
    availableLimit: number
    isAccountInitialized: boolean
    transactions: Transaction[]

    constructor() {
        this.transactions = new Array()
    }
    
    discountLimit(transaction) {
        this.transactions.push(transaction)
        this.availableLimit -= transaction['amount']
    }

    createAccount(account) {
        this.activeCard = account['active-card']
        this.availableLimit = account['available-limit']
        this.isAccountInitialized = true
    }
}
