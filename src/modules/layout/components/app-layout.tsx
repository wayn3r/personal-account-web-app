import { PropsWithChildren } from 'react'
import Head from 'next/head'
import { AppLayoutProps } from '../types'

type Props = PropsWithChildren<AppLayoutProps>
export function AppLayout({ children, title, description }: Props) {
  const fullTitle: string = `${title} | Personal Account`
  return (
    <main>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </main>
  )
}
