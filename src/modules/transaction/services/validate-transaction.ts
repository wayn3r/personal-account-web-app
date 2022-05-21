import { AddTransactionFormValues, TransactionErrors } from '../types'

export const validateTransaction = (values: AddTransactionFormValues) => {
  const errors: Partial<TransactionErrors> = {}
  Object.entries(values).forEach((entry: [string, string | number]) => {
    const [key, value] = entry
    if (!value) {
      errors[key as 'type' | 'name' | 'description' | 'amount'] = 'Required'
    }
  })
  return errors
}
