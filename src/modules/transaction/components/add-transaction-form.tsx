import { FormEvent, useState } from 'react'
import {
  AddTransactionFormProps,
  AddTransactionFormValues,
  Errors,
} from '../types'

import styles from './add-transaction-form.module.scss'
import { useForm, Button, Input, TextAreaInput } from '@/modules/shared'

type Props = AddTransactionFormProps
export function AddTransactionForm({ onAddTransaction }: Props) {
  const [errors, setErrors] = useState<Errors<AddTransactionFormValues>>({})
  const [canContinue, setCanContinue] = useState(false)
  const { form, handleForm } = useForm<AddTransactionFormValues>({
    initialValues: {
      amount: 0,
      name: '',
      currency: 'DOP',
      type: '',
      date: new Date(),
      account: '',
      tags: [],
      description: '',
    },
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCanContinue(Number(form.amount.value) > 0)
    const values: AddTransactionFormValues = {
      name: form.name.value,
      description: form.description.value,
      amount: parseFloat(form.amount.value.toString()),
      currency: form.currency.value,
      type: form.type.value,
      date: new Date(form.date.value),
      account: form.account.value,
      tags: form.tags.value.toString().split(' '),
    }
    const errors: Record<string, string> = {}
    Object.entries(values).forEach(([key, value]) => {
      if (value === '') {
        errors[key] = 'This field is required'
      }
    })
    setErrors({})
    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return
    }
    onAddTransaction(values)
  }

  return (
    <form className={styles.form} {...handleForm} onSubmit={handleSubmit}>
      {!canContinue && (
        <>
          <label>
            Amount
            <Input type='number' {...form.amount} />
            {errors.amount && <span>{errors.amount}</span>}
          </label>
          <Button>Continue</Button>
        </>
      )}

      {canContinue && (
        <>
          <label>
            Type
            <Input type='text' {...form.type} />
          </label>
          <label>
            Transaction name
            <Input type='text' {...form.name} />
            {errors.name && <span>{errors.name}</span>}
          </label>
          <label>
            Description
            <TextAreaInput {...form.description} rows={3} />
            {errors.description && <span>{errors.description}</span>}
          </label>
          <label>
            Date
            <Input
              type='date'
              {...form.date}
              value={form.date.value.toString()}
            />
            {errors.date && <span>{errors.date}</span>}
          </label>
          <label>
            Account
            <Input type='text' {...form.account} />
            {errors.account && <span>{errors.account}</span>}
          </label>
          <label>
            Tags
            <Input type='text' {...form.tags} />
            {errors.tags && <span>{errors.tags}</span>}
          </label>
          <Button>Add</Button>
        </>
      )}
    </form>
  )
}
