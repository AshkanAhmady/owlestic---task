import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router';
import CountryDetail from '../../components/CountryDetail/CountryDetail';
import styles from "./DetailPage.module.scss"

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
                <CountryDetail />
            </div>
        </main>
    );
}

export default DetailPage;