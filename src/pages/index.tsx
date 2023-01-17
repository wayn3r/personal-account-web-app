import { AppLayout } from '@/modules/layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <AppLayout
      title='Home'
      description='This is the home page'
      navbar
    ></AppLayout>
  )
}

export default Home
