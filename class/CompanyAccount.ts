import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (amount > 0) {
      if (this.validateStatus()) {
        this.deposit(amount); 
        console.log(`Empréstimo de R$${amount} Aprovado! Saldo atual: R$${this.getBalance()}`)
      } else {
        console.log('Conta inativa. Não é possível solicitar empréstimos.')
      }
    } else {
      console.log('Valor inválido. Por favor, insira um número positivo.')
    }
  }
}
