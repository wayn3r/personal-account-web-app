import { GeneralBalanceProps } from '../types'
import styles from '../styles/general-balance.module.scss'

const number = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
type Props = GeneralBalanceProps
export const GeneralBalance = ({ transactions }: Props) => {
  const balance = transactions
    .map(t => t.amount * (t.type === 'debit' ? -1 : 1))
    .reduce((a, b) => a + b, 0)
  const className = balance > 0 ? styles.credit : styles.debit
  return <span className={className}>{number.format(balance)}</span>
}
