import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../../styles/scss/Header.module.scss'

const Header: NextPage = () => {
  return (
    <div>
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <h1>👾</h1>
                </a>
            </Link>
            <div className={styles.sec}>
                <Link href="/">
                    <a>
                        <p>Crypto</p>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <p>Twitter</p>
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <p>Blog</p>
                    </a>
                </Link>
            </div>
        </header>
    </div>
  )
}

export default Header