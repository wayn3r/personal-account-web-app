import { PropsWithChildren } from 'react'
import Head from 'next/head'
import { AppLayoutProps } from '../../types'
import styles from './app-layout.module.scss'

type Props = PropsWithChildren<AppLayoutProps>
export function AppLayout({ children, title, description }: Props) {
  const fullTitle: string = `${title} | Personal Account`
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{fullTitle}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.content}>{children}</main>
    </div>
  )
}
