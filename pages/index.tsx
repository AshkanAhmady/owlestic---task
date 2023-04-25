
import type { NextPage } from 'next'
import { Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'
// import { useAppDispatch, useAppSelector } from '../hooks/toolkitHooks'
// import { fetchAllCountries } from '../redux/country/actions'
import styles from '../styles/Home.module.scss'
import Loading from '../components/Loading/Loading'
const CountryList = dynamic(() => import("../components/CountryList/CountryList"))
const Filters = dynamic(() => import('../components/filters/Filters'))

const Home: NextPage = () => {
  // const dispatch = useAppDispatch()
  // const data = useAppSelector((state) => state)

  // console.log(data)

  // useEffect(() => {
  //   dispatch(fetchAllCountries())
  // }, [])

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Suspense fallback={<Loading />}>
          <Filters />
          <CountryList />
        </Suspense>
      </div>
    </main>
  )
}

export default Home

