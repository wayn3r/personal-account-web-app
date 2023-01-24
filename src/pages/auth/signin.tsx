import { AppLayout } from '@/modules/layout'
import { Button } from '@/modules/shared'
import { signIn } from 'next-auth/react'
import styles from '@/styles/pages/signin.module.scss'
import { GoogleIcon } from '@/assets/icons'

// const googleMetaTag = {
//   'google-signin-client_id': String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID),
// }
export function LoginPage() {
  return (
    <AppLayout
      title='Login'
      description='Login to Personal Account Web App'
      className={styles.centered}
    >
      <div>
        <h2>Personal Account</h2>
      </div>
      <section className={styles.options}>
        <h4 className={styles.label}>Sign in options</h4>
        <Button
          className={styles.button}
          onClick={() => signIn('google', { redirect: true, callbackUrl: '/' })}
        >
          <GoogleIcon />
          Sign in with Google
        </Button>
      </section>
    </AppLayout>
  )
}

export default LoginPage
