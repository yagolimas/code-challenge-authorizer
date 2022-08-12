import Account from './Account'
import Operation from './Operation'
import AccountAlreadyInitialized from './validation/AccountAlreadyInitialized'

export default class CreateAccount extends Operation {

    constructor (operation) {
        super(operation)
        this.validations.push(new AccountAlreadyInitialized())
    }

    process(account: Account) {
        account.createAccount(this.operation['account'])
    }
}