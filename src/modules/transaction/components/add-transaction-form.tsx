import { AddTransactionFormProps, AddTransactionFormValues } from '../types'

import styles from '../styles/add-transaction-form.module.scss'

type Props = AddTransactionFormProps
export function AddTransactionForm({ onAddTransaction }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const values: AddTransactionFormValues = {
      type: formData.get('type') as string,
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      amount: parseFloat(formData.get('amount') as string),
    }
    onAddTransaction(values)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Type
        <select name="type">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </label>
      <label>
        Transaction Name
        <input type="text" name="name" />
      </label>
      <label>
        Description
        <textarea name="description"></textarea>
      </label>
      <label>
        Amount
        <input type="number" name="amount" />
      </label>
      <button>Add</button>
    </form>
  )
}
