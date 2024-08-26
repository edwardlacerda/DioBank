export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit (amount: number): void {
    if(this.validateStatus()){
      this.balance += amount;
      console.log(`Voce depositou R$${amount}. Saldo atual: R$${this.balance}`)
    }
  }

  withdraw (amount: number): void  {
    if(this.validateStatus() && this.balance >= amount){
    this.balance -= amount;
      console.log(`Voce sacou R$${amount}. Saldo atual: R$${this.balance}`)
    }else if (this.balance < amount){
      console.log('Saldo Insuficiente.')
    }
  }

  getBalance(): number {
    return this.balance
  }

  protected validateStatus(): boolean {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
