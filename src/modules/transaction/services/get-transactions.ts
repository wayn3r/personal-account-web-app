import { Transaction } from '../types'

const LOCAL_STORAGE_KEY = 'transactions'

export async function getTransactions(): Promise<Transaction[]> {
  const storedJson = localStorage.getItem(LOCAL_STORAGE_KEY) || '[]'
  const currentTransactions = JSON.parse(storedJson) as Transaction[]
  return currentTransactions
}
