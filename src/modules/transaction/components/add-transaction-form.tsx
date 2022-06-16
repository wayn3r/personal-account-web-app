import { useState } from 'react'
import {
  AddTransactionFormProps,
  AddTransactionFormValues,
  TransactionErrors,
} from '../types'
import { validateTransaction } from '../services/validate-transaction'

import styles from '../styles/add-transaction-form.module.scss'
import { Input } from 'modules/shared/components/form/input'
import { TextAreaInput } from 'modules/shared/components/form/textarea'
import { Button } from 'modules/shared/components/button/button'

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
        Type
        <Input type="text" name="type" />
      </label>
      <label>
        Transaction name
        <Input type="text" name="name" />
        {errors.name && <span>{errors.name}</span>}
      </label>
      <label>
        Description
        <TextAreaInput name="description" rows={3} />
        {errors.description && <span>{errors.description}</span>}
      </label>
      <label>
        Amount
        <Input type="number" name="credit" />
        {errors.credit && <span>{errors.credit}</span>}
      </label>
      <Button>Add</Button>
    </form>
  )
}
