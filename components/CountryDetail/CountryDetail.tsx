import Image from "next/image";
import numberSpliter from "../../utils/numberSpliter";
import styles from "./CountryDetail.module.scss"

const CountryDetail = () => {
    return (
        <div className={styles.countryDetail}>
            <div className={styles.flag}>
                <Image
                    src="https://flagcdn.com/de.svg"
                    alt="flag"
                    fill
                    loading="lazy"
                />
            </div>
            <div className={styles.allDetails}>
                <h1>Germany</h1>
                <div className={styles.informations}>
                    <div>
                        <div>
                            <span>Native Name:</span>
                            <span>belgie</span>
                        </div>
                        <div>
                            <span>Population:</span>
                            <span>{numberSpliter(24343532532)}</span>
                        </div>
                        <div>
                            <span>Region:</span>
                            <span>Europe</span>
                        </div>
                        <div>
                            <span>Sub Region:</span>
                            <span>Western Europe</span>
                        </div>
                        <div>
                            <span>Capital:</span>
                            <span>Brussels</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Top Level Domai:</span>
                            <span>.be</span>
                        </div>
                        <div>
                            <span>Currencies:</span>
                            <span>Euro</span>
                        </div>
                        <div>
                            <span>Languages:</span>
                            <span>Dutch, French</span>
                        </div>
                    </div>
                </div>
                <div className={styles.borders}>
                    <p>Border Countries:</p>
                    <div>
                        <span>France</span>
                        <span>Germany</span>
                        <span>Netherlands</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryDetail;