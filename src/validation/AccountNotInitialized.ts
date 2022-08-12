import Validation from './Validation'
import Account from '../Account'

export default class AccountNotInitialized implements Validation {

    message = 'account-not-initialized'

    validate(account: Account) {
        return !account.isAccountInitialized
    }
}