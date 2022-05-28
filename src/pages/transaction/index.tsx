import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AppLayout } from 'modules/layout/components/app-layout'
import { Transaction } from 'modules/transaction/types'
import { getTransactions } from 'modules/transaction/services/get-transactions'
import { TransactionList } from 'modules/transaction/components/transaction-list'
import { GeneralBalance } from 'modules/transaction/components/general-balance'

function TransactionPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    getTransactions().then(setTransactions)
  }, [])
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

export default TransactionPage
