import { userLoggedInEventHandler } from '@/modules/auth'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  events: { signIn: userLoggedInEventHandler },
  pages: { signIn: '/auth/signin' },
  callbacks: {
    signIn: async params => {
      console.log(params)
      return true
    },
  },
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_AUTH_SECRET),
    }),
  ],
})
