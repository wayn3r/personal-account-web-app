import { Transaction } from '../domain'
import { TransactionListItemProps } from '../types'
import styles from './transaction-list-item.module.scss'

const number = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const date = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
type Props = { transaction: Transaction }
export const TransactionListItem = ({ transaction }: Props) => {
  const className = transaction.type === 'credit' ? styles.credit : styles.debit
  const addedAt = transaction.date
  return (
    <li className={styles.transaction}>
      <h4>{transaction.name}</h4>
      <span className={className}>
        {number.format(transaction.amount)} {transaction.currency}
      </span>
      <p>{transaction.description || 'No description'}</p>
      <time dateTime={addedAt.toISOString()} title={addedAt.toISOString()}>
        {date.format(addedAt)}
      </time>
      <p>
        {transaction.account}
        {transaction.tags.map(t => (
          <span key={t.id}>{t.name}</span>
        ))}
      </p>
    </li>
  )
}
