import { EventCallbacks } from 'next-auth'

const API_HOST = process.env.NEXT_PUBLIC_API_URL

export const userLoggedInEventHandler: EventCallbacks['signIn'] =
  async message => {
    const id_token = message.account?.id_token
    fetch(API_HOST + '/auth/register', {
      method: 'POST',
      body: JSON.stringify({ token: id_token }),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      if (!response.ok) {
        console.warn('Server responded with ' + response.status)
      }
      console.log('User registered')
    })
  }
