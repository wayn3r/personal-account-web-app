import { concat } from '@/modules/shared'
import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.scss'

export const Button = (props: ButtonHTMLAttributes<{}>) => {
  const { className, ...rest } = props
  return <button {...rest} className={concat(styles.button, className)} />
}
