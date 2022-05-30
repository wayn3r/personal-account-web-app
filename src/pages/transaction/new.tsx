import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppLayout } from 'modules/layout/components/app-layout'
import { AddTransactionForm } from 'modules/transaction/components/add-transaction-form'
import { AddTransactionFormValues } from 'modules/transaction/types'
import * as transactionService from 'modules/transaction/services/add-transaction'

function NewTransactionPage() {
  const router = useRouter()
  const handleAddNewTransaction = async (values: AddTransactionFormValues) => {
    try {
      const transaction = await transactionService.addTransaction(values)
      router.push('/transaction')
    } catch (error: any) {
      console.log(error.errors)
    }
  }
  return (
    <AppLayout title="New Transaction" description="Create a new transaction">
      <h1>Add Transaction</h1>
      <Link href="/transaction">&larr; Go back</Link>
      <AddTransactionForm onAddTransaction={handleAddNewTransaction} />
    </AppLayout>
  )
}

export default NewTransactionPage
