import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                this is heder
            </header>
            <Outlet/>
            <footer>
                this is footer
            </footer>
        </>
    )
}
export default Layout;