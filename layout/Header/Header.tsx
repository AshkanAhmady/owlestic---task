import styles from './Header.module.scss'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
        localStorage.setItem("theme", theme === "light" ? "dark" : "light")
    }

    return (
        <nav className={`${styles.header} ${styles[theme]}`}>
            <div className={styles.container}>
                <h1>Where in the world?</h1>
                <button onClick={changeTheme}>
                    <FontAwesomeIcon
                        icon={faMoon}
                    />
                    <span>Dark Mode</span>
                </button>
            </div>
        </nav>
    );
}

export default Header;