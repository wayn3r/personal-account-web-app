import { concat } from '@/modules/shared'
import { TextareaHTMLAttributes } from 'react'
import styles from './textarea.module.scss'

export const TextAreaInput = (props: TextareaHTMLAttributes<{}>) => {
  const { className, ...rest } = props
  return <textarea {...rest} className={concat(styles.textarea, className)} />
}
