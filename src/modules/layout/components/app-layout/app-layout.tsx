import { PropsWithChildren } from 'react'
import Head from 'next/head'
import { AppLayoutProps } from '../../types'
import {
  NavigationBar,
  Props as NavigationBarProps,
} from '../navigation-bar/navigation-bar'
import styles from './app-layout.module.scss'

const pages: NavigationBarProps['pages'] = [
  {
    icon: <span>🏠</span>,
    title: 'Home',
    path: '/',
  },
  {
    icon: <span>💲</span>,
    title: 'Transactions',
    path: '/transaction',
  },
]

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
      <main className={styles.content}>
        {children}

        <NavigationBar pages={pages} />
      </main>
    </div>
  )
}
