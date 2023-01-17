export interface AddTransactionFormValues {
  amount: number
  name: string
  currency: string
  type: string
  date: Date
  account: string
  tags: string[]
  description: string
}

export type Errors<T> = {
  [P in keyof T]?: string
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
