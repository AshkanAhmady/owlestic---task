import styles from "./CountryCard.module.scss"
import Image from 'next/image'
import numberSpliter from "../../utils/numberSpliter";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SingleCountryType } from "../../types";

const CountryCard = ({ country }: any) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`${styles.singleCountry} ${styles[theme]}`}>
            <div className={styles.image}>
                <Image
                    src={country.flags.svg}
                    alt="Github"
                    fill
                    loading="lazy"
                />
            </div>
            <div className={styles.detail}>
                <p>{country.name}</p>
                <div>
                    <span>Population:</span>
                    <span>{numberSpliter(country.population)}</span>
                </div>
                <div>
                    <span>Region:</span>
                    <span>{country.region}</span>
                </div>
                <div>
                    <span>Capital:</span>
                    <span>{country.capital}</span>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;