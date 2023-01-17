import { ServerValidationError } from '../models/server-validation-error'
import { AddTransactionFormValues, Transaction } from '../types'

const API_HOST = process.env.NEXT_PUBLIC_API_URL
export async function addTransaction(
  values: AddTransactionFormValues
): Promise<Transaction> {
  const requestOptions: RequestInit = {
    method: 'POST',
    body: JSON.stringify({
      ...values,
      date: new Date(),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await fetch(
    `${API_HOST}/transactions/register`,
    requestOptions
  )
  if (!response.ok) {
    const errors = await response.json()
    throw new ServerValidationError(errors.message)
  }
  const transaction = await response.json()
  return transaction
}
