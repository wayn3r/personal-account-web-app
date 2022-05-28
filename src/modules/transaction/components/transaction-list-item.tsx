import { TransactionListItemProps } from '../types'
import styles from '../styles/transaction-list-item.module.scss'

const number = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
type Props = TransactionListItemProps
export const TransactionListItem = ({ transaction }: Props) => {
  const className = transaction.type === 'credit' ? styles.credit : styles.debit

  return (
    <li className={styles.transaction}>
      <h4>{transaction.name}</h4>
      <p>{transaction.type}</p>
      <p>{transaction.description}</p>
      <span className={className}>{number.format(transaction.amount)}</span>
    </li>
  )
}
