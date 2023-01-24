import { AppLayout } from '@/modules/layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <AppLayout
      title='Home'
      description='This is the home page'
      navbar
      topbar
    ></AppLayout>
  )
}

export default Home
