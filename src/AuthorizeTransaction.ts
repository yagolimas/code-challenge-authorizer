import Account from './Account'
import Operation from './Operation'
import AccountNotInitialized from './validation/AccountNotInitialized'

export default class AuthorizeTransaction extends Operation {

    constructor (operation) {
        super(operation)
        this.validations.push(new AccountNotInitialized())
    }

    process(account: Account) {
        account.discountLimit(this.operation['transaction'])
    }
}