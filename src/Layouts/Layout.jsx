import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Layout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;