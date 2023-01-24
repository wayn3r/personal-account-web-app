import { PropsWithChildren } from 'react'
import Head from 'next/head'
import { LayoutProps } from '../../types'
import {
  NavigationBar,
  Props as NavigationBarProps,
} from '../navigation-bar/navigation-bar'
import styles from './app-layout.module.scss'
import { CoinsIcon, HomeIcon } from '@/assets/icons'
import { TopBar } from '../top-bar'
import { concat } from '@/modules/shared'

const pages: NavigationBarProps['pages'] = [
  {
    icon: <HomeIcon />,
    title: 'Home',
    path: '/',
    fullPath: true,
  },
  {
    icon: <CoinsIcon />,
    title: 'Transactions',
    path: '/transactions',
  },
]

type Props = PropsWithChildren<LayoutProps>
export function AppLayout({
  className,
  children,
  title,
  description,
  topbar = false,
  navbar = false,
  metas = {},
}: Props) {
  const fullTitle: string = `${title} | Personal Account`

  const metaTags = Object.entries(metas).map(([name, content]) => (
    <meta key={name} name={name} content={content} />
  ))

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{fullTitle}</title>
        <meta name='description' content={description} />
        {metaTags}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={concat(styles.content, className)}>
        {topbar && <TopBar />}
        {children}
        {navbar && <NavigationBar pages={pages} />}
      </main>
    </div>
  )
}
