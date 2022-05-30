import { Transaction } from '../types'
import { validateTransaction } from './validate-transaction'

const LOCAL_STORAGE_KEY = 'transactions'

export async function getTransactions(): Promise<Transaction[]> {
  const storedJson = localStorage.getItem(LOCAL_STORAGE_KEY) || '[]'
  const currentTransactions = JSON.parse(storedJson) as Transaction[]

  const isValidTransaction = (t: Transaction) => {
    return Object.entries(validateTransaction(t)).length === 0
  }

  return currentTransactions.filter(isValidTransaction)
}

export async function getServerTransactions(): Promise<Transaction[]> {
  const response = await fetch('http://localhost:3000/api/v1/transaction')
  const transactions = await response.json()

  return transactions
}
