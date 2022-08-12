import Account from './Account'
import Operation from './Operation'

export default class Authorizer {
    operations: Operation[]
    account: Account

    constructor() {
        this.operations = new Array()
        this.account = new Account()
    }

    addOperation(operation) {
        this.operations.push(operation)
    }

    processOperations() {
        this.operations.forEach(operation => {
            if (operation.validate(this.account)) operation.process(this.account)
        })
    }
}