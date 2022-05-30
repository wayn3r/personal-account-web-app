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
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      credit: parseFloat(formData.get('credit') as string),
      debit: parseFloat(formData.get('debit') as string),
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
        Credit
        <input type="number" name="credit" min={0} />
        {errors.credit && <span>{errors.credit}</span>}
      </label>
      <label>
        Debit
        <input type="number" name="debit" min={0} />
        {errors.debit && <span>{errors.debit}</span>}
      </label>
      <button>Add</button>
    </form>
  )
}
