import { Transaction } from '../domain'
import { TransactionListItem } from './transaction-list-item'

import styles from './transaction-list.module.scss'

type Props = { transactions: Transaction[] }

export const TransactionList = ({ transactions }: Props) => {
  const hasNoTransactions = transactions.length === 0
  const monthTransactions = getMonthTransactions(transactions)
  return (
    <>
      {Object.entries(monthTransactions).map(([month, transactions]) => (
        <ul className={styles.transactions} key={month}>
          <h4 className={styles.title}>{month.toUpperCase()}</h4>
          {transactions.map(transaction => (
            <TransactionListItem
              key={transaction.id}
              transaction={transaction}
            />
          ))}
          {hasNoTransactions && (
            <li className={styles.noTransactions}>
              <p>No transactions found</p>
            </li>
          )}
        </ul>
      ))}
    </>
  )
}

function getMonthTransactions(transactions: Transaction[]) {
  const monthTransactions: Record<string, Transaction[]> = {}

  const languages = globalThis.navigator?.languages as string[]
  const dateFormat = new Intl.DateTimeFormat(languages, {
    year: 'numeric',
    month: 'long',
  })

  transactions.forEach(transaction => {
    const month = dateFormat.format(transaction.date)
    monthTransactions[month] ??= []
    monthTransactions[month].push(transaction)
  })

  return monthTransactions
}
