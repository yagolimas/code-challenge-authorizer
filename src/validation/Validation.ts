import Account from '../Account'

export default interface Validation {

    message: string

    validate(account: Account)
}