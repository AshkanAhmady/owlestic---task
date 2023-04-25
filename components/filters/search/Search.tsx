import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import styles from "./Search.module.scss"

const Search = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <form className={`${styles.searchForm} ${styles[theme]}`} action="">
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