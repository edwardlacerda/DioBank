import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'
import promptSync from 'prompt-sync'

const prompt = promptSync()

const vipAccount = new VipAccount('José', 112233)
vipAccount.deposit(100)
vipAccount.withdraw(100)
console.log('\n')

const peopleAccount = new PeopleAccount(123456789, 'Ana', 78910)
peopleAccount.deposit(500)
peopleAccount.withdraw(400)
console.log(`Documento ID: ${peopleAccount.getDocId()}`)
console.log('\n')

const companyAccount = new CompanyAccount('DioBank', 1234568)
const input = prompt('Digite o valor do empréstimo: R$');
const amount= parseFloat(input)
companyAccount.getLoan(amount)
companyAccount.deposit(500)
companyAccount.withdraw(500)