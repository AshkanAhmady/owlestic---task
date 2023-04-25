import { Suspense } from "react";
import { ChildsComponentsType } from "./types";
import dynamic from "next/dynamic";
import Loading from "../components/Loading/Loading";
const Header = dynamic(() => import("./Header/Header"))

const Layout: React.FC<ChildsComponentsType> = ({ children }) => {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Header />
                {children}
            </Suspense>
        </div>
    );
}

export default Layout;