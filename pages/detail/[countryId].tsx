import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router';
import styles from "./DetailPage.module.scss"
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '../../components/Loading/Loading';
const CountryDetail = dynamic(() => import("../../components/CountryDetail/CountryDetail"))

const DetailPage = () => {

    const router = useRouter()

    return (
        <main className={styles.detailPage}>
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