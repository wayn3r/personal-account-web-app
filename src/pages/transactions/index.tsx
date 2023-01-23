import Link from 'next/link'
import { AppLayout } from '@/modules/layout'
import {
  getServerTransactions,
  TransactionList,
  GeneralBalance,
} from '@/modules/transaction'
import { Transaction } from '@/transaction/domain'
import styles from '@/styles/pages/transaction.module.scss'
import { transactionMapper } from '@/transaction/infrastructure'

type Props = {
  transactions: Transaction[]
  fetchingError: boolean
}
function TransactionPage({ transactions, fetchingError }: Props) {
  transactions = transactionMapper.mapList(transactions)

  return (
    <AppLayout title='Transaction' description='Personal Transaction' navbar>
      <h1>Transactions</h1>
      <p>This is the transaction page</p>
      <Link href='/transactions/new'>Add New</Link>
      {fetchingError && (
        <p className={styles.error}>Error fetching transactions</p>
      )}
      {!fetchingError && <TransactionList transactions={transactions} />}
      <span>
        General Balance: <GeneralBalance transactions={transactions} />
      </span>
    </AppLayout>
  )
}

export async function getServerSideProps() {
  const props = await getServerTransactions()
    .then(({ data, ...pagination }) => {
      return {
        pagination,
        transactions: data,
        fetchingError: false,
      }
    })
    .catch(() => ({
      pagination: {},
      transactions: [],
      fetchingError: true,
    }))

  return { props }
}

export default TransactionPage
