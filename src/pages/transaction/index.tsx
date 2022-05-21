import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AppLayout } from 'modules/layout/components/app-layout'
import { Transaction } from 'modules/transaction/types'
import { getTransactions } from 'modules/transaction/services/get-transactions'

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

      {transactions.map(transaction => (
        <div key={transaction.id}>
          <div>
            <h2>{transaction.name}</h2>
            <p>{transaction.description}</p>
          </div>
          <div>
            <p>{transaction.type}</p>
            <span>{transaction.amount}</span>
          </div>
        </div>
      ))}
    </AppLayout>
  )
}

export default TransactionPage
