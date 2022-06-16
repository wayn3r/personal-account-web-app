import { concat } from 'modules/shared/utils/concat'
import { TextareaHTMLAttributes } from 'react'
import styles from '../../styles/form/textarea.module.scss'

export const TextAreaInput = (props: TextareaHTMLAttributes<{}>) => {
  const { className, ...rest } = props
  return <textarea {...rest} className={concat(styles.textarea, className)} />
}
