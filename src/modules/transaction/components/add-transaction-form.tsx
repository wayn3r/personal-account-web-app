import { FormEvent, useState } from 'react'
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
import { useForm } from 'modules/shared/hooks/useForm'

type Props = AddTransactionFormProps
export function AddTransactionForm({ onAddTransaction }: Props) {
  const [errors, setErrors] = useState<Partial<TransactionErrors>>({})
  const { form, handleForm } = useForm<AddTransactionFormValues>({
    initialValues: {
      credit: 0,
      debit: 0,
      description: '',
      name: '',
    },
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const values: AddTransactionFormValues = {
      name: form.name.value,
      description: form.description.value,
      credit: parseFloat(form.credit.value.toString()),
      debit: parseFloat(form.debit.value.toString()),
    }
    console.log(values)
    // const errors = validateTransaction(values)
    // if (Object.keys(errors).length > 0) {
    //   setErrors(errors)
    //   return
    // }
    // onAddTransaction(values)
  }

  return (
    <form className={styles.form} {...handleForm} onSubmit={handleSubmit}>
      <label>
        Type
        <Input type="text" name="type" />
      </label>
      <label>
        Transaction name
        <Input type="text" {...form.name} />
        {errors.name && <span>{errors.name}</span>}
      </label>
      <label>
        Description
        <TextAreaInput {...form.description} rows={3} />
        {errors.description && <span>{errors.description}</span>}
      </label>
      <label>
        Amount
        <Input type="number" name="amount" />
        {errors.credit && <span>{errors.credit}</span>}
      </label>
      <Button>Add</Button>
    </form>
  )
}
