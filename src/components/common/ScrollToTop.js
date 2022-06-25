import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const jqueryScript = document.createElement("script");
    const bootstrapScript = document.createElement("script");
    const wayPoint = document.createElement("script");
    const lightCase = document.createElement("script");
    const swiper = document.createElement("script");
    const countdown = document.createElement("script");
    const jqueryCountereup = document.createElement("script");
    const wow = document.createElement("script");
    const isotope = document.createElement("script");
    const functions = document.createElement("script");

    jqueryScript.src = "/assets/js/jquery-3.6.0.min.js";
    jqueryScript.async = true;

    bootstrapScript.src = "/assets/js/bootstrap.bundle.min.js";
    bootstrapScript.async = true;

    wayPoint.src = "/assets/js/waypoints.min.js";
    wayPoint.async = true;

    lightCase.src = "/assets/js/lightcase.js";
    lightCase.async = true;

    swiper.src = "/assets/js/swiper-bundle.min.js";
    swiper.async = true;

    countdown.src = "/assets/js/countdown.min.js";
    countdown.async = true;

    jqueryCountereup.src = "/assets/js/jquery.counterup.min.js";
    jqueryCountereup.async = true;

    wow.src = "/assets/js/wow.min.js";
    wow.async = true;

    isotope.src = "/assets/js/isotope.pkgd.min.js";
    isotope.async = true;

    functions.src = "/assets/js/functions.js";
    functions.async = true;

    document.body.appendChild(jqueryScript);
    document.body.appendChild(bootstrapScript);
    document.body.appendChild(wayPoint);
    document.body.appendChild(lightCase);
    document.body.appendChild(swiper);
    document.body.appendChild(countdown);
    document.body.appendChild(jqueryCountereup);
    document.body.appendChild(wow);
    document.body.appendChild(isotope);
    document.body.appendChild(functions);
    // <script src="/assets/js/jquery-3.6.0.min.js"></script>
    // <script src="/assets/js/bootstrap.bundle.min.js"></script>
    // <script src="/assets/js/waypoints.min.js"></script>
    // <script src="/assets/js/lightcase.js"></script>
    // <script src="/assets/js/swiper-bundle.min.js"></script>
    // <script src="/assets/js/countdown.min.js"></script>
    // <script src="/assets/js/jquery.counterup.min.js"></script>
    // <script src="/assets/js/wow.min.js"></script>
    // <script src="/assets/js/isotope.pkgd.min.js"></script>
    // <script src="/assets/js/functions.js"></script>

    window.scrollTo(0, 0);
    return () => {
      document.body.removeChild(jqueryScript);
      document.body.removeChild(bootstrapScript);
      document.body.removeChild(wayPoint);
      document.body.removeChild(lightCase);
      document.body.removeChild(swiper);
      document.body.removeChild(countdown);
      document.body.removeChild(jqueryCountereup);
      document.body.removeChild(wow);
      document.body.removeChild(isotope);
      document.body.removeChild(functions);
    };
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
