import styles from './Header.module.scss'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <nav className={styles.header}>
            <div className={styles.container}>
                <h1>Where in the world?</h1>
                <button>
                    <FontAwesomeIcon
                        icon={faMoon}
                    // style={{ fontSize: 20, color: "red" }}
                    />
                    <span>Dark Mode</span>
                </button>
            </div>
        </nav>
    );
}

export default Header;