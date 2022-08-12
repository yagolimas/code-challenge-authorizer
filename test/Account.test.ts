import Authorizer from '../src/Authorizer'
import CreateAccount from '../src/CreateAccount'
import AuthorizeTransacion from '../src/AuthorizeTransaction'

test("Criando uma conta", function() {
    const authorizer = new Authorizer()
    authorizer.addOperation(new CreateAccount({ "account": { "active-card": true, "available-limit": 175 }}))
    authorizer.processOperations()
    expect(authorizer.account.isAccountInitialized).toStrictEqual(true)
})

test("Criando ah conta e autorizando uma transacao", function() {
    const authorizer = new Authorizer()
    authorizer.addOperation(new CreateAccount({ "account": { "active-card": true, "available-limit": 175 }}))
    authorizer.addOperation(new AuthorizeTransacion({ "transaction": { "merchant": "Uber Eats", "amount": 25, "time": "2020-12-01T11:07:00.000Z" }}))
    authorizer.processOperations()
    expect(authorizer.account.availableLimit).toStrictEqual(150)
})

test("Criando uma conta e verificando se ja foi inicilizada", function() {
    const authorizer = new Authorizer()
    authorizer.addOperation(new CreateAccount({ "account": { "active-card": true, "available-limit": 175 }}))
    authorizer.addOperation(new CreateAccount({ "account": { "active-card": true, "available-limit": 175 }}))
    authorizer.processOperations()
    expect(authorizer.account.availableLimit).toStrictEqual(175)
})

test("Criando trasancao e verificando se ah ja foi inicilizada", function() {
    const authorizer = new Authorizer()
    authorizer.addOperation(new AuthorizeTransacion({ "transaction": { "merchant": "Uber Eats", "amount": 25, "time": "2020-12-01T11:07:00.000Z" }}))
    authorizer.addOperation(new CreateAccount({ "account": { "active-card": true, "available-limit": 175 }}))
    authorizer.addOperation(new AuthorizeTransacion({ "transaction": { "merchant": "Uber Eats", "amount": 25, "time": "2020-12-01T11:07:00.000Z" }}))
    authorizer.processOperations()
    expect(authorizer.account.availableLimit).toStrictEqual(150)
})