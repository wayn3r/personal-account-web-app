import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import { UserBadge } from '@/modules/auth'
import styles from './top-bar.module.scss'

export const TopBar = () => {
  const { data: session } = useSession()
  if (!session) return null

  const email = session?.user?.email

  return (
    <header className={styles.container}>
      <p>
        <h2>Personal Account</h2>

        {email && (
          <>
            Signed in as <span className={styles.email}>{email}</span>
          </>
        )}
      </p>

      <UserBadge />
    </header>
  )
}
