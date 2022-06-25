import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../../components/common/ScrollToTop";

const AdminLayout = ({ children }) => {
    return (
        <ScrollToTop>
            {/* <Navbar /> */}
            {/* <ToastContainer
        containerId="network-error"
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover
      /> */}
            <div>{children && children}</div>
            {/* <Newsletter /> */}
            {/* <Footer /> */}
        </ScrollToTop>
    );
};

export default AdminLayout;
