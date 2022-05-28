export interface AddTransactionFormValues {
  type: 'credit' | 'debit'
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

export interface GeneralBalanceProps {
  transactions: Transaction[]
}
export interface TransactionListProps {
  transactions: Transaction[]
}

export interface TransactionListItemProps {
  transaction: Transaction
}
export interface TransactionErrors {
  type: string
  name: string
  description: string
  amount: string
}
