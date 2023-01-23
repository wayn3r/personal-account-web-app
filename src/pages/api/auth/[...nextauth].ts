import { userLoggedInEventHandler } from '@/modules/auth'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  secret: String(process.env.NEXTAUTH_SECRET),
  // useSecureCookies: true,
  events: { signIn: userLoggedInEventHandler },
  pages: { signIn: '/auth/signin' },
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_AUTH_SECRET),
    }),
  ],
})
