import { useRouter } from 'next/router'
import { AppLayout } from 'modules/layout/components/app-layout'
import { AddTransactionForm } from 'modules/transaction/components/add-transaction-form'
import { AddTransactionFormValues } from 'modules/transaction/types'

function NewTransactionPage() {
  const router = useRouter()
  const handleAddNewTransaction = (values: AddTransactionFormValues) => {
    console.log(values)
    router.push('/transaction')
  }
  return (
    <AppLayout title="New Transaction" description="Create a new transaction">
      <h1>Add Transaction</h1>
      <AddTransactionForm onAddTransaction={handleAddNewTransaction} />
    </AppLayout>
  )
}

export default NewTransactionPage
