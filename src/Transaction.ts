export default class Transaction {
    constructor(readonly merchant: string, readonly amount: number, readonly time: Date) {}
}