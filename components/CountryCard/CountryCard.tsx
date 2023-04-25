import styles from "./CountryCard.module.scss"
import Image from 'next/image'
import numberSpliter from "../../utils/numberSpliter";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const CountryCard = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`${styles.singleCountry} ${styles[theme]}`}>
            <div className={styles.image}>
                <Image
                    src="https://flagcdn.com/de.svg"
                    alt="Github"
                    fill
                    loading="lazy"
                />
            </div>
            <div className={styles.detail}>
                <p>germany</p>
                <div>
                    <span>Population:</span>
                    <span>{numberSpliter(24343532532)}</span>
                </div>
                <div>
                    <span>Region:</span>
                    <span>europe</span>
                </div>
                <div>
                    <span>Capital:</span>
                    <span>berlin</span>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;