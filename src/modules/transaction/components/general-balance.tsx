import { Transaction } from '../domain'
import styles from './general-balance.module.scss'

const number = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
type Props = { transactions: Transaction[] }
export const GeneralBalance = ({ transactions }: Props) => {
  const balance = transactions.reduce(
    (carry, current) =>
      carry + (current.type === 'credit' ? 1 : -1) * current.amount,
    0
  )
  const className = balance > 0 ? styles.credit : styles.debit
  return <span className={className}>{number.format(balance)}</span>
}
