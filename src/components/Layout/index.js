import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import {  Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <Navbar />
            <Outlet />
        <Footer />
      </>
    )
}

export default Layout;