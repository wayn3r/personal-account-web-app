import { useState } from 'react'
import {
  AddTransactionFormProps,
  AddTransactionFormValues,
  TransactionErrors,
} from '../types'
import { validateTransaction } from '../services/validate-transaction'

import styles from '../styles/add-transaction-form.module.scss'

type Props = AddTransactionFormProps
export function AddTransactionForm({ onAddTransaction }: Props) {
  const [errors, setErrors] = useState<Partial<TransactionErrors>>({})
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

    const errors = validateTransaction(values)
    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return
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
        {errors.type && <span>{errors.type}</span>}
      </label>
      <label>
        Transaction Name
        <input type="text" name="name" />
        {errors.name && <span>{errors.name}</span>}
      </label>
      <label>
        Description
        <textarea name="description"></textarea>
        {errors.description && <span>{errors.description}</span>}
      </label>
      <label>
        Amount
        <input type="number" name="amount" />
        {errors.amount && <span>{errors.amount}</span>}
      </label>
      <button>Add</button>
    </form>
  )
}
