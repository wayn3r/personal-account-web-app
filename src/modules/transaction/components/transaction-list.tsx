import { Transaction } from '../domain'
import { TransactionListItem } from './transaction-list-item'

import styles from './transaction-list.module.scss'

type Props = { transactions: Transaction[] }

export const TransactionList = ({ transactions }: Props) => {
  const hasNoTransactions = transactions.length === 0
  return (
    <ul className={styles.transactions}>
      {transactions.map(transaction => (
        <TransactionListItem key={transaction.id} transaction={transaction} />
      ))}
      {hasNoTransactions && (
        <li className={styles.noTransactions}>
          <p>No transactions found</p>
        </li>
      )}
    </ul>
  )
}
