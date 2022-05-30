import { TransactionListItemProps } from '../types'
import styles from '../styles/transaction-list-item.module.scss'

const number = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
type Props = TransactionListItemProps
export const TransactionListItem = ({ transaction }: Props) => {
  const className = transaction.balance > 0 ? styles.credit : styles.debit

  return (
    <li className={styles.transaction}>
      <h4>{transaction.name}</h4>
      <p>{transaction.description}</p>
      <span className={className}>{number.format(transaction.balance)}</span>
    </li>
  )
}
