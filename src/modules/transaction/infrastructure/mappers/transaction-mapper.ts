import { Transaction } from '@/transaction/domain'
export class TransactionMapper {
  mapList(data: any[]): Transaction[] {
    return data.map(item => this.map(item))
  }
  map(data: any): Transaction {
    const TransactionInstance = class extends Transaction {
      static load(): Transaction {
        return new Transaction({
          id: data.id,
          name: data.name,
          description: data.description,
          amount: data.amount,
          currency: data.currency,
          type: data.type,
          account: data.account,
          tags: data.tags,
          date: new Date(data.date),
          createdAt: new Date(data.createdAt),
        })
      }
    }
    return TransactionInstance.load()
  }
}

export const transactionMapper = new TransactionMapper()
