import Link from 'next/link'
import { camelCaseStyles, concat } from '@/modules/shared'
import scss from './navigation-bar.module.scss'
import { useRouter } from 'next/router'
const styles = camelCaseStyles(scss)

export type Props = {
  pages: { icon: JSX.Element; title: string; path: string }[]
}

export function NavigationBar({ pages }: Props) {
  const { pathname } = useRouter()

  const inlineStyles = { '--number-of-options': pages.length } as any
  return (
    <nav className={styles.navigation}>
      <ul style={inlineStyles}>
        {pages.map(page => (
          <li key={page.path}>
            <Link href={page.path}>
              <a className={concat(pathname === page.path && styles.active)}>
                <span className={styles.navigationIcon}>{page.icon}</span>
                <span className={styles.navigationTitle}>{page.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
