import Link from "next/link";
import styles from "./CountryList.module.scss"
import dynamic from "next/dynamic";
const SingleCountry = dynamic(() => import("../CountryCard/CountryCard"))

const CountryList = ({ countries }: any) => {

    return (
        <div className={styles.countryList}>
            {countries?.map((country: any, index: number) => {
                return (
                    <Link key={index} href={`/detail/${country.name}`}>
                        <SingleCountry country={country} />
                    </Link>
                )
            })}
        </div>
    );
}

export default CountryList;