import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../common/ScrollToTop";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Layout = ({ children }) => {
  return (
    <ScrollToTop>
      <Navbar />
      <div>{children && children}</div>
      <Footer />
    </ScrollToTop>
  );
};

export default Layout;
