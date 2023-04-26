import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import numberSpliter from "../../utils/numberSpliter";
import styles from "./CountryDetail.module.scss"
import _ from "underscore";
const CountryDetail = ({ country }: any) => {
    const { theme } = useContext(ThemeContext)

    console.log(country)

    return (
        <div className={`${styles.countryDetail} ${styles[theme]}`}>
            <div className={styles.flag}>
                <Image
                    src={country?.flags.svg}
                    alt="flag"
                    fill
                    loading="lazy"
                />
            </div>
            <div className={styles.allDetails}>
                <h1>{country?.name}</h1>
                <div className={styles.informations}>
                    <div>
                        <div>
                            <span>Native Name:</span>
                            <span>{country?.nativeName}</span>
                        </div>
                        <div>
                            <span>Population:</span>
                            <span>{numberSpliter(country?.population)}</span>
                        </div>
                        <div>
                            <span>Region:</span>
                            <span>{country?.region}</span>
                        </div>
                        <div>
                            <span>Sub Region:</span>
                            <span>{country?.subregion}</span>
                        </div>
                        <div>
                            <span>Capital:</span>
                            <span>{country?.capital}</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Top Level Domain:</span>
                            <span>{country?.topLevelDomain}</span>
                        </div>
                        <div>
                            <span>Currencies:</span>
                            <span>{country?.currencies[0].name}</span>
                        </div>
                        <div>
                            <span>Languages:</span>
                            <span>{_.pluck(country?.languages, 'name').join(", ")}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.borders}>
                    <p>Border Countries:</p>
                    <div>
                        {country?.borders?.map((border: string, index: number) => {
                            return <span key={index}>{border}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryDetail;