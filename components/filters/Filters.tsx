import styles from "./Filters.module.scss"
import Search from "./search/Search";
import SelectRegion from "./selectRegion/SelectRegion";

const Filters = () => {
    return (
        <div className={styles.filter}>
            <Search />
            <SelectRegion />
        </div>
    );
}

export default Filters;