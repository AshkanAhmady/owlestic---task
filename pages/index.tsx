
import type { NextPage } from 'next'
import CountryList from '../components/CountryList/CountryList'
import Filters from '../components/filters/Filters'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Filters />
        <CountryList />
      </div>
    </main>
  )
}

export default Home
