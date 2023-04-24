import Header from "./Header/Header";
import { ChildsComponentsType } from "./types";

const Layout: React.FC<ChildsComponentsType> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default Layout;