import React from "react";
import { FaTwitter, FaMedium, FaInstagram, FaDiscord } from "react-icons/fa";
const Footer = ({ imageUrl }) => {
  return (
    <footer>
      <div className="container-fluid px-5 py-16 footer-field">
        <div className="d-flex justify-content-between align-items-start newsletter-section">
          <div className="d-flex newsletter-content">
            <div>
              <p className="fs-4 fw-bold mb-1">NEWSLETTER</p>
              <p className="fw-bold">
                Signup for newsletter to never miss a drop
              </p>
            </div>
          </div>

          <div className="input-group mt-2 email-subs">
            <input type="email" className="form-control join-input" placeholder="you@firsteleven.club" />
            <div className="input-group-append">
              <button className="btn join-btn fw-bold" type="button">JOIN</button>
            </div>
          </div>
          {/* <div className="mt-2 d-flex">
            <input
              type="email"
              className="form-control join-input me-2"
              placeholder="you@firsteleven.club"
            />
            <button type="button" className="btn join-btn fw-bold">
              JOIN
            </button>
          </div> */}
        </div>

        <div className="container">
          <hr className="footer-devider my-5" />
        </div>

        <div className="col-12 mb-5 powered-title">
          <label className="uppercase w-100">POWERED BY</label>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-between align-items-center px-5 powered-section">
          <img
            src="assets/images/footer/CoinGecko-logo(1).svg"
            alt="coinbase"
            className="footer-chain-img"
          />
          <img
            src="assets/images/footer/Coinmarketcap.png"
            alt="coinbase"
            className="footer-chain-img vertical-space"
          />
          <img
            src="assets/image/footer/OpenSea.png"
            alt="opensea"
            className="footer-chain-img"
          />
        </div>

        {/* <p className="fw-bold fs-5 text-center">
          F11 Contract Address: 0x9db475371b5cc2913d3219f72e16a3f101339a05
        </p> */}

        <div className="d-flex justify-content-between">
          <div>
            <p className="fw-bold text-muted fs-5 mb-2">CONTACT US</p>
            <p className="m-0" style={{ fontSize: '12px'}}>
              <a className="me-3 text-white no-underline">
                contact@firsteleven.club
              </a>
            </p>
          </div>


          <div className="text-end">
            <p className="fw-bold text-muted fs-5 mb-2">FOLLOW US</p>
            <p>
              <FaTwitter className="ms-5 social-icon" onClick={() => window.open('https://twitter.com/firstelevenclub')} />
              <FaMedium className="ms-5 social-icon" onClick={() => window.open('https://medium.com/@firstelevenclub')} />
              <FaInstagram className="ms-5 social-icon" onClick={() => window.open('https://www.instagram.com/firstelevenclub/')} />
              <FaDiscord className="ms-5 social-icon" onClick={() => window.open('https://discord.gg/seNzHtbexd')} />
            </p>
          </div>
        </div>

        <p className="fw-bold text-muted mb-1">
          For media & partnership enquiries
        </p>
        <a href="#" className="text-white" style={{ fontSize: '12px'}}>
          media@firsteleven.com
        </a>

        <hr className="footer-devider" />
        <div className="d-flex justify-content-between copyright-section">
          <p className="copyright-text" style={{ fontSize: '12px'}}>&copy; {new Date().getFullYear()} FirstEleven Inc</p>
          <div className="d-flex justify-content-between footer-links">
            <div style={{ fontSize: '12px'}} >
              <a
                href="#"
                className="ms-3 mb-3 text-white no-underline"
              >
                How to Buy
              </a>
              <a
                href="#"
                className="ms-3 mb-3 text-white no-underline"
              >
                $F11 Whitepaper
              </a>
              <a
                href="#"
                className="ms-3 mb-3 text-white no-underline"
              >
                Join our Community
              </a>
            </div>
            <div style={{ fontSize: '12px'}}>
              <a
                target="_blank"
                href="https://medium.com/@firstelevenclub"
                el="noopener noreferrer"
                className="ms-3 mb-3 text-white no-underline"
              >
                Blog
              </a>
              <a
                href="#"
                className="ms-3 mb-3 text-white no-underline"
              >
                Privacy Policy
              </a>
              <a
                href="3"
                className="ms-3 mb-3 text-white no-underline"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
