import Validation from './Validation'
import Account from '../Account'

export default class AccountAlreadyInitialized implements Validation {

    message = 'account-already-initialized'

    validate(account: Account) {
        return account.isAccountInitialized
    }
}