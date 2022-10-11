import Link from 'next/link'

export function NavigationBar() {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <Link href='/'>
            <a>
              <span className='icon'></span>
              <span className='title'>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/transaction'>
            <a>
              <span className='icon'></span>
              <span className='title'>Transactions</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
