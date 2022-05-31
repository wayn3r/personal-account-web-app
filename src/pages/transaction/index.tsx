import Link from 'next/link'
import { AppLayout } from 'modules/layout/components/app-layout'
import { Transaction } from 'modules/transaction/types'
import { getServerTransactions } from 'modules/transaction/services/get-transactions'
import { TransactionList } from 'modules/transaction/components/transaction-list'
import { GeneralBalance } from 'modules/transaction/components/general-balance'
import styles from 'styles/pages/transaction.module.scss'

type Props = {
  transactions: Transaction[]
  fetchingError: boolean
}
function TransactionPage({ transactions, fetchingError }: Props) {
  return (
    <AppLayout title="Transaction" description="Personal Transaction">
      <h1>Transactions</h1>
      <p>This is the transaction page</p>
      <Link href="/transaction/new">Add New</Link>
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
  let transactions: Transaction[] = []
  let fetchingError: boolean = false
  try {
    transactions = await getServerTransactions()
  } catch (error) {
    console.log(error)
    fetchingError = true
  }
  return {
    props: {
      transactions,
      fetchingError,
    },
  }
}

export default TransactionPage
