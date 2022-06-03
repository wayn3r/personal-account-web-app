import { concat } from 'modules/shared/utils/concat'
import { InputHTMLAttributes } from 'react'
import styles from '../../styles/form/input.module.scss'

export const Input = (props: InputHTMLAttributes<{}>) => {
  const { className, ...rest } = props
  return <input {...rest} className={concat(styles.input, className)} />
}
