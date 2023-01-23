import { PropsWithChildren } from 'react'
import Head from 'next/head'
import { LayoutProps } from '../../types'
import {
  NavigationBar,
  Props as NavigationBarProps,
} from '../navigation-bar/navigation-bar'
import styles from './app-layout.module.scss'
import { CoinsIcon } from '@/assets/icons'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const pages: NavigationBarProps['pages'] = [
  {
    icon: <CoinsIcon />,
    title: 'Transactions',
    path: '/transactions',
  },
]

type Props = PropsWithChildren<LayoutProps>
export function AppLayout({
  children,
  title,
  description,
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
      <main className={styles.content}>
        <UserBagde />
        {children}
        {navbar && <NavigationBar pages={pages} />}
      </main>
    </div>
  )
}

const UserBagde = () => {
  const { data: session } = useSession()

  if (!session) return null

  const { user } = session

  return (
    <div>
      <h2>{user?.name}</h2>
      {user?.image && (
        <Image src={user.image} alt='User Image' width={100} height={100} />
      )}
      Signed in as {user?.email} <br />
      <button onClick={() => signOut({ callbackUrl: '/auth/signin' })}>
        Sign out
      </button>
    </div>
  )
}
