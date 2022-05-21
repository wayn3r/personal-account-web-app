import type { NextPage } from 'next'
import Link from 'next/link'
import { AppLayout } from 'modules/layout/components/app-layout'

const Home: NextPage = () => {
  return (
    <AppLayout title="Home" description="This is the home page">
      <Link href="/">Home Page</Link>
      <Link href="/transaction/new">Add Transaction</Link>
    </AppLayout>
  )
}

export default Home
