import { AddTransactionFormValues, TransactionErrors } from '../types'

export const validateTransaction = (values: AddTransactionFormValues) => {
  const errors: Partial<TransactionErrors> = {}
  Object.entries(values).forEach((entry: [string, string | number]) => {
    const [key, value] = entry
    if (typeof entry === 'string' && !value) {
      errors[key as keyof AddTransactionFormValues] = 'Required'
    }
    if (typeof entry === 'number' && value < 0) {
      errors[key as keyof AddTransactionFormValues] = 'Required'
    }
  })
  return errors
}
