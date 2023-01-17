import { AppLayout } from '@/modules/layout'
import { signIn } from 'next-auth/react'

// const googleMetaTag = {
//   'google-signin-client_id': String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID),
// }
export function LoginPage() {
  return (
    <AppLayout title='Login' description='Login to Personal Account Web App'>
      <div>
        <h1>Personal Account Web App</h1>
      </div>
      Not signed in <br />
      <button
        onClick={() => signIn('google', { redirect: true, callbackUrl: '/' })}
      >
        Sign in
      </button>
    </AppLayout>
  )
}

export default LoginPage
