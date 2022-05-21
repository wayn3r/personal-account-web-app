import { AddTransactionFormValues, Transaction } from '../types'
import { getTransactions } from './get-transactions'

const LOCAL_STORAGE_KEY = 'transactions'
export async function addTransaction(
  values: AddTransactionFormValues
): Promise<void> {
  const transaction: Transaction = {
    id: Date.now(),
    ...values,
  }
  const transactions = await getTransactions()
  transactions.unshift(transaction)
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(transactions))
}
