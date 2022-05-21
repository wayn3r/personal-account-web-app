import Link from 'next/link'
import { AppLayout } from 'modules/layout/components/app-layout'

function TransactionPage() {
  return (
    <AppLayout title="Transaction" description="Personal Transaction">
      <h1>Transactions</h1>
      <p>This is the transaction page</p>
      <Link href="/transaction/new">Add New</Link>
    </AppLayout>
  )
}

export default TransactionPage
