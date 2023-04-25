import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Search.module.scss"

const Search = () => {
    return (
        <form className={styles.searchForm} action="">
            <input placeholder="Search for a country..." type="text" />
            <button>
                <FontAwesomeIcon
                    icon={faSearch}
                // style={{ fontSize: 20, color: "red" }}
                />
            </button>
        </form>
    );
}

export default Search;