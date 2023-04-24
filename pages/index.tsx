
import type { NextPage } from 'next'
import Filters from './components/filters/Filters'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Filters />
    </main>
  )
}

export default Home
