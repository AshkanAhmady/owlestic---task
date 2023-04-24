import styles from './Header.module.scss'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <nav className={styles.header}>
            <h1>Where in the world?</h1>
            <button>
                <FontAwesomeIcon
                    icon={faMoon}
                // style={{ fontSize: 20, color: "red" }}
                />
                <span>Dark Mode</span>
            </button>
        </nav>
    );
}

export default Header;