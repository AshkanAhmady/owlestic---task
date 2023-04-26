import { Suspense, useContext } from "react";
import dynamic from "next/dynamic";
import Loading from "../components/Loading/Loading";
import { ChildsComponentsType } from "../types";
import styles from "./Layout.module.scss"
import { ThemeContext } from "../context/ThemeContext";
const Header = dynamic(() => import("./Header/Header"), {
    loading: () => <Loading />
})

const Layout: React.FC<ChildsComponentsType> = ({ children }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <Header />
            <div className={`${styles.main} ${styles[theme]}`}>
                {children}
            </div>
        </div >
    );
}

export default Layout;