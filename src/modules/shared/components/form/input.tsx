import { concat } from '@/modules/shared'
import { InputHTMLAttributes } from 'react'
import styles from './input.module.scss'

export const Input = (props: InputHTMLAttributes<{}>) => {
  const { className, ...rest } = props
  return <input {...rest} className={concat(styles.input, className)} />
}
