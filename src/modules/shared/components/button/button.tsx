import { concat } from 'modules/shared/utils/concat'
import { ButtonHTMLAttributes } from 'react'
import styles from '../../styles/button/button.module.scss'

export const Button = (props: ButtonHTMLAttributes<{}>) => {
  const { className, ...rest } = props
  return <button {...rest} className={concat(styles.button, className)} />
}
