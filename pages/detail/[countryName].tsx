import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router';
import styles from "./DetailPage.module.scss"
import dynamic from 'next/dynamic';
import { useContext, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import { ThemeContext } from '../../context/ThemeContext';
import request from '../../utils/Configs/request';
import { useAppDispatch, useAppSelector } from '../../hooks/toolkitHooks';
import { fetchSingleCountry } from '../../redux/country/actions';
const CountryDetail = dynamic(() => import("../../components/CountryDetail/CountryDetail"), {
    loading: () => <Loading />
})

const DetailPage = () => {
    const { theme } = useContext(ThemeContext)
    const router = useRouter()
    const dispatch = useAppDispatch()

    const { data, loading, error } = useAppSelector((state) => state.allSlices.singleCounrty);

    useEffect(() => {
        if (router.query.countryName) {
            dispatch(fetchSingleCountry(`${router.query.countryName}`))
        }
    }, [router.query])


    if (loading) return <Loading />;
    if (error) return <p>{error}</p>;
    if (data) return (
        <main className={`${styles.detailPage} ${styles[theme]}`}>
            <div className={styles.container}>
                <button onClick={() => router.push("/")}>
                    <FontAwesomeIcon
                        icon={faArrowLeftLong}
                    />
                    <span>Back</span>
                </button>
                <CountryDetail country={data} />
            </div>
        </main>
    );
}

export default DetailPage;