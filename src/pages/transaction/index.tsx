import Link from 'next/link'
import { AppLayout } from 'modules/layout/components/app-layout'
import { Transaction } from 'modules/transaction/types'
import { getServerTransactions } from 'modules/transaction/services/get-transactions'
import { TransactionList } from 'modules/transaction/components/transaction-list'
import { GeneralBalance } from 'modules/transaction/components/general-balance'

type Props = {
  transactions: Transaction[]
}
function TransactionPage({ transactions }: Props) {
  return (
    <AppLayout title="Transaction" description="Personal Transaction">
      <h1>Transactions</h1>
      <p>This is the transaction page</p>
      <Link href="/transaction/new">Add New</Link>
      <TransactionList transactions={transactions} />
      <span>
        General Balance: <GeneralBalance transactions={transactions} />
      </span>
    </AppLayout>
  )
}

export async function getServerSideProps() {
  const transactions = await getServerTransactions()
  return {
    props: {
      transactions,
    },
  }
}

export default TransactionPage
