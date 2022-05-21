export interface AddTransactionFormValues {
  type: string
  name: string
  description: string
  amount: number
}
export interface Transaction extends AddTransactionFormValues {
  id: number
}
export interface AddTransactionFormProps {
  onAddTransaction: (values: AddTransactionFormValues) => void
}

export interface TransactionErrors {
  type: string
  name: string
  description: string
  amount: string
}
