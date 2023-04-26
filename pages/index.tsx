import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.scss'
import Loading from '../components/Loading/Loading'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/toolkitHooks'
import { fetchAllCountries } from '../redux/country/actions'
import request from '../utils/Configs/request'
import { BASE_URL } from '../utils/Configs/constants/api.endpoint'
import axios from 'axios'
import http from '../utils/Configs/constants/config'
const CountryList = dynamic(() => import("../components/CountryList/CountryList"), {
  loading: () => <Loading />
})
const Filters = dynamic(() => import('../components/filters/Filters'))

const Home: NextPage = ({ countries }: any) => {

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