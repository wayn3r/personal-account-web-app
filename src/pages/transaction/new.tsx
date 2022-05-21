import { AppLayout } from 'modules/layout/components/app-layout'
import { AddTransactionForm } from 'modules/transaction/components/add-transaction-form'

function NewTransactionPage() {
  return (
    <AppLayout title="New Transaction" description="Create a new transaction">
      <h1>Add Transaction</h1>
      <AddTransactionForm onAddTransaction={console.log} />
    </AppLayout>
  )
}

export default NewTransactionPage
