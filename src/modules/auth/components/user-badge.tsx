import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { Button } from '@/modules/shared'
import styles from './user-badge.module.scss'

export const UserBadge = () => {
  const { data: session } = useSession()

  if (!session) return null

  const { user } = session

  return (
    <section className={styles.wrapper} tabIndex={0}>
      <Image
        className={styles.picture}
        src={String(user?.image)}
        alt='User Image'
        width={75}
        height={75}
      />
      <div className={styles.hidden}>
        <p>
          <h4>{user?.name}</h4>
          <span className={styles.email}>{user?.email}</span>
        </p>
        <hr />
        <Button
          className={styles.button}
          onClick={() => signOut({ callbackUrl: '/auth/signin' })}
        >
          Sign out
        </Button>
      </div>
    </section>
  )
}
