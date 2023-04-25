import styles from "./Filters.module.scss"
import dynamic from "next/dynamic";
const Search = dynamic(() => import("./search/Search"))
const SelectRegion = dynamic(() => import("./selectRegion/SelectRegion"))

const Filters = () => {
    return (
        <div className={styles.filter}>
            <Search />
            <SelectRegion />
        </div>
    );
}

export default Filters;