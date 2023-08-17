class BankAccount {
    constructor(accountNumber=0, ownerName){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = 0.0
        this.transactions = []

    }
    deposit(money){
        let deposit = this.balance += Math.floor(money)
        this.transactions.push(`deposit: ${deposit}`)
    }
    withdraw(monet){
        let withdraw = this.balance -= Math.floor(monet)
        this.transactions.push(`withdraw: ${withdraw}`)
    }
    getBalance(){
        return this.balance
    }
    getTransaction(){
        return this.transactions
    }
}
const bk = new BankAccount()
console.log(bk.deposit(287.11))
console.log(bk.deposit(3028.94))
console.log(bk.withdraw(22.1))
console.log(bk.withdraw(2053.44))
console.log(bk.getBalance())
console.log(bk.getTransaction())
