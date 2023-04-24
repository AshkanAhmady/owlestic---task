import Search from "./Search";
import SelectRegion from "./SelectRegion";
import styles from "./Filters.module.scss"

const Filters = () => {
    return (
        <div className={styles.filter}>
            <Search />
            <SelectRegion />
        </div>
    );
}

export default Filters;