import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useAppDispatch } from '../../../hooks/toolkitHooks'
import { searchCountryName } from "../../../redux/country/countrySlice"
import styles from "./Search.module.scss"

const Search = () => {
    const { theme } = useContext(ThemeContext)
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        setSearch(value);
        dispatch(searchCountryName(value));
    };

    return (
        <form className={`${styles.searchForm} ${styles[theme]}`} action="">
            <input placeholder="Search for a country..." onChange={changeHandler}
                type="text"
                value={search} />
            <button>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    );
}

export default Search;