import { Suspense, useContext } from "react";
import dynamic from "next/dynamic";
import Loading from "../components/Loading/Loading";
import { ChildsComponentsType } from "../types";
import styles from "./Layout.module.scss"
import { ThemeContext } from "../context/ThemeContext";
const Header = dynamic(() => import("./Header/Header"))

const Layout: React.FC<ChildsComponentsType> = ({ children }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <Header />
            <div className={`${styles.main} ${styles[theme]}`}>
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </div>
        </div >
    );
}

export default Layout;