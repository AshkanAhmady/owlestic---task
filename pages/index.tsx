import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.scss'
import Loading from '../components/Loading/Loading'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/toolkitHooks'
import { fetchAllCountries } from '../redux/country/actions'
const Filters = dynamic(() => import('../components/filters/Filters'))
const CountryList = dynamic(() => import("../components/CountryList/CountryList"), {
  loading: () => <Loading />
})

const Home: NextPage = () => {

  const { filterCountries, loading, error } = useAppSelector((state) => state.allSlices.countries);

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Filters />
        <CountryList countries={filterCountries} />
      </div>
    </main>
  )
}

export default Home