import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppLayout } from '@/modules/layout'
import {
  AddTransactionForm,
  AddTransactionFormValues,
  addTransaction,
} from '@/modules/transaction'

function NewTransactionPage() {
  const router = useRouter()
  const handleAddNewTransaction = async (values: AddTransactionFormValues) => {
    try {
      const transaction = await addTransaction(values)
      router.push('/transactions')
    } catch (error: any) {
      console.error(error.errors)
    }
  }
  return (
    <AppLayout
      title='New Transaction'
      description='Create a new transaction'
      navbar
      topbar
    >
      <h1>Add Transaction</h1>
      <Link href='/transactions'>&larr; Go back</Link>
      <AddTransactionForm onAddTransaction={handleAddNewTransaction} />
    </AppLayout>
  )
}

export default NewTransactionPage
