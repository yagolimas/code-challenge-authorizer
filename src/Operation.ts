import Account from './Account'
import AccountAlreadyInitialized from './validation/AccountAlreadyInitialized'
import AccountNotInitialized from './validation/AccountNotInitialized'
import Validation from './validation/Validation'

export default abstract class Operation {

    validations: Validation[]
    violations: String[]

    constructor (readonly operation) {
        this.violations = new Array()
        this.validations = new Array()
    }

    validate(account: Account) {
        for (const validation of this.validations) {
            if (validation.validate(account)) {
                this.violations.push(validation.message)
            }
        }
        return this.violations.length === 0
    }

    abstract process(account)
}