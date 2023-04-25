
import type { NextPage } from 'next'
import { useEffect } from 'react'
import CountryList from '../components/CountryList/CountryList'
import Filters from '../components/filters/Filters'
import { useAppDispatch, useAppSelector } from '../hooks/toolkitHooks'
import { fetchAllCountries } from '../redux/country/actions'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state)

  console.log(data)

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [])

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

export async function getServerSideProps() {
  return {
    props: {
      countries: "dd"
    }
  }
}
