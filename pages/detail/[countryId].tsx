import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router';
import styles from "./DetailPage.module.scss"
import dynamic from 'next/dynamic';
import { Suspense, useContext } from 'react';
import Loading from '../../components/Loading/Loading';
import { ThemeContext } from '../../context/ThemeContext';
const CountryDetail = dynamic(() => import("../../components/CountryDetail/CountryDetail"))

const DetailPage = () => {
    const { theme } = useContext(ThemeContext)
    const router = useRouter()

    return (
        <main className={`${styles.detailPage} ${styles[theme]}`}>
            <div className={styles.container}>
                <button onClick={() => router.push("/")}>
                    <FontAwesomeIcon
                        icon={faArrowLeftLong}
                    />
                    <span>Back</span>
                </button>
                <Suspense fallback={<Loading />}>
                    <CountryDetail />
                </Suspense>
            </div>
        </main>
    );
}

export default DetailPage;