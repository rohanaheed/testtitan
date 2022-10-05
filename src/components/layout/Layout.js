import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../common/ScrollToTop";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Newsletter from "../common/Navbar/Newsletter";

const Layout = ({ children }) => {
  return (
    <ScrollToTop>
      <Navbar />
      <section className="relative bg-layout overflow-hidden">
        <div className="showcase w-full absolute inset-0" style={{ backgroundImage: 'url(/assets/bg-2.gif)', Zindex: 0 }}></div>
        <div>{children && children}</div>
      </section>
      <Footer />
    </ScrollToTop>
  );
};

export default Layout;
