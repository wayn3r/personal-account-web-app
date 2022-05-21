export interface AddTransactionFormValues {
  type: string
  name: string
  description: string
  amount: number
}
export interface AddTransactionFormProps {
  onAddTransaction: (values: AddTransactionFormValues) => void
}
