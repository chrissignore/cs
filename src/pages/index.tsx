import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chris Signore</title>
        <meta name="description" content="chrissignore.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.logo}>
            <h1>Chris Signore</h1>
            <h2>v0 Commentator, x0 Engineer</h2>
            <p>
              Welcome to my little website. This is where I share
              ideas, designs, and content.
            </p>
          </div>
        </div>
        
      </main>
    </div>
  )
}

export default Home
