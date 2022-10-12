export interface AddTransactionFormValues {
  name: string
  description: string
  credit: number
  debit: number
}

export interface Paginated<T> {
  data: T[]
}
export interface Transaction extends AddTransactionFormValues {
  id: number
  balance: number
  date: Date
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
  name: string
  description: string
  credit: string
  debit: string
}
