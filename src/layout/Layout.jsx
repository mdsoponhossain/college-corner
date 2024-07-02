import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";

const Layout = () => {
    return (
        <div className="max-w-[1280px] mx-auto border border-black">
            <Navbar></Navbar>
            {
                <Outlet></Outlet>
            }
        </div>
    );
};

export default Layout;