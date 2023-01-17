import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
// import { useRouter } from 'next/router'
import '@/styles/styles.scss'
// import { useEffect } from 'react'
// import LoginPage from './login'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // const router = useRouter()
  // useEffect(() => {
  //   if (!session) {
  //     router.push('/login', '/login')
  //   }
  // }, [session, router])

  // console.log(session)

  // const component = session ? (
  //   <Component {...pageProps} />
  // ) : (
  //   <LoginPage></LoginPage>
  // )

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
export default MyApp
