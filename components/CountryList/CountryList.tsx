import Link from "next/link";
import styles from "./CountryList.module.scss"
import dynamic from "next/dynamic";
const SingleCountry = dynamic(() => import("../CountryCard/CountryCard"))

const CountryList = () => {


    return (
        <div className={styles.countryList}>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((country, index) => {
                return (
                    <Link key={index} href={`/detail/3467`}>
                        <SingleCountry />
                    </Link>
                )
            })}
        </div>
    );
}

export default CountryList;