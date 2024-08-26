import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
deposit(amount: number): void {
    if(this.validateStatus()){
        const bonus =10
        const finalAmount = amount + bonus
        super.deposit(finalAmount)
        console.log(`Depósito com bônus. Você depositou R$${amount}, total R$${finalAmount}.`)
    }
}

}