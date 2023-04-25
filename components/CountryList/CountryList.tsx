import Link from "next/link";
import SingleCountry from "../CountryCard/CountryCard";
import styles from "./CountryList.module.scss"

const CountryList = () => {


    return (
        <div className={styles.countryList}>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((country, index) => {
                return <Link key={index} href={`/detail/3467`}><SingleCountry /></Link>
            })}
        </div>
    );
}

export default CountryList;