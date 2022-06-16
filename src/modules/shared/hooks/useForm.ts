import { FormEvent, useState } from 'react'

interface useFormProps<T> {
  initialValues: T
}

type useFormValue<T> = {
  [key in keyof T]: {
    name: key
    value: T[key]
  }
}

export function useForm<T extends {}>({ initialValues }: useFormProps<T>) {
  const [values, setValues] = useState<useFormValue<T>>(
    getFormatedInitalValue(initialValues)
  )

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  function getFormatedInitalValue<T extends {}>(values: T): useFormValue<T> {
    const keys: Array<keyof T> = Object.keys(values) as Array<keyof T>
    const formValue: Partial<useFormValue<T>> = keys.reduce(
      (acc, current) => ({
        ...acc,
        [current]: {
          name: current,
          value: values[current],
          onChange,
        },
      }),
      {}
    )
    return formValue as useFormValue<T>
  }

  function onChange(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget
    const { name, value } = form
    const key = name as keyof T
    setValues(values => ({ ...values, [key]: { ...values[key], value } }))
  }
  return {
    form: values,
    handleForm: { onSubmit },
  }
}
