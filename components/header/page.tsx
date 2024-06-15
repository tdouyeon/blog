import Link from 'next/link'
import styles from './header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.textContainer}>
        <Link href="/" className={styles.linkText}>
          HOME
        </Link>
        <Link href="/about" className={styles.linkText}>
          ABOUT
        </Link>
      </div>
    </header>
  )
}

export default Header
