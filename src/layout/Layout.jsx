import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const Layout = () => {
    return (
        <div>
        {/* // <div> */}
            <Navbar></Navbar>
            {
                <Outlet></Outlet>
            }
                <Footer></Footer>
        </div>
    );
};

export default Layout;