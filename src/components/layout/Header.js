import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { signOut } from "../../redux/auth/authSlice";
import ConnectionModel from "../common/ConnectionModel";
import WalletModel from "../common/WalletModel";

const Header = () => {
  const history = useHistory();
  // const dispatch = useDispatch();
  // const { username } = useSelector((state) => state.auth);
  const username = "";
  const [modalShow, setModalShow] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className="header" style={{ background: "black" }}>
      {/* Mobile Header Section Starts Here */}
      <div className="mobile-header">
        {/* Back Arrow Starts Here */}
        <div className="back-arrow ml-2">
          <a href="#">
            <svg
              height="25px"
              id="Layer_1"
              style={{ enableBackground: "new 0 0 512 512" }}
              version="1.1"
              viewBox="0 0 512 512"
              width="25px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " />
            </svg>
          </a>
        </div>
        {/* Back Arrow Ends Here */}
        {/* F11 Logo Starts Here */}
        <div className="feleven-logo">
          <a href="/">
            <img src="assets/images/logo/logo1.svg" alt="FEleven Logo here" />
          </a>
        </div>
        {/* F11 Logo Ends Here */}

        {/* Search Icon Starts Here */}
        <div className="search-icon">
          <a href="#">
            <svg
              height="25px"
              id="Layer_1"
              style={{ enableBackground: "new 0 0 512 512" }}
              version="1.1"
              viewBox="0 0 512 512"
              width="25px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
            </svg>
          </a>
        </div>
        {/* Search Icon Endss Here */}
      </div>
      {/* Mobile Header Section Starts Here */}
      <div className="container-fluid">
        <div className="header__content">
          <div
            className={
              showSidebar ? "header__menu header__menu--active" : "header__menu"
            }
          >
            <ul className="header__nav mb-0">
              <li className="header__nav-item">
                <NavLink
                  className="header__nav-link"
                  activeClassName="link-active"
                  to="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,10"
                >
                  MARKETPLACE
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink
                  className="header__nav-link"
                  activeClassName="link-active"
                  to="/nft"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,10"
                >
                  NFT
                </NavLink>
              </li>
            </ul>
          </div>
          <div style={{ width: "10%", marginLeft: "-195px" }}>
            <Link to="/">
              <img src="assets/images/logo/logo1.svg" alt="logo" />
            </Link>
          </div>
          {!username && (
            <div className="header__actions">
              <li className="header__nav-item">
                <NavLink
                  className="header__nav-link"
                  activeClassName="link-active"
                  to="/login"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,10"
                >
                  Login
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink
                  className="header__nav-link"
                  activeClassName="link-active"
                  to="/signup"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-offset="0,10"
                  style={{
                    marginRight: "30px",
                  }}
                >
                  Signup
                </NavLink>
              </li>
            </div>
          )}
          {username && (
            <div className="header__actions">
              <div className="header__action header__action--profile">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-offset="-100,10"
                  >
                    <span>
                      <i className="icofont-user" />
                    </span>{" "}
                    <span className="d-none d-md-inline">{username}</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item item-active" href="/profile">
                        <span className="me-1">
                          <i className="icofont-options" />
                        </span>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="activity.html">
                        <span className="me-1">
                          <i className="icofont-lightning-ray" />
                        </span>
                        Activity
                      </a>
                    </li>
                    {/* <li>
                        <Link
                          className="dropdown-item item-active"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(signOut());
                            history.push("/login");
                          }}
                          to="/"
                        >
                          <span className="me-1">
                            <i className="icofont-space-shuttle" />
                          </span>
                          Sign Out
                        </Link>
                      </li> */}
                    <li>
                      {/* <Link
                          className="dropdown-item item-active"
                          to="/login"
                        >
                          <span className="me-1">
                            <i className="icofont-login" />
                          </span>{" "}
                          Sign In
                        </Link> */}
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          // dispatch(signOut());
                          // history.push("/login");
                        }}
                      >
                        <span className="ms-1">
                          <i className="icofont-logout" />
                        </span>{" "}
                        Sign Out{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="wallet-btn">
                <div onClick={() => setModalShow(true)}>
                  <span onClick={() => setModalShow(true)}>
                    <i className="icofont-wallet" />
                  </span>{" "}
                  {/* <span className="d-none d-md-inline">234.98ETH</span>{" "} */}
                </div>
              </div>
            </div>
          )}
          <WalletModel show={modalShow} onHide={() => setModalShow(false)} />
          {!username && <ConnectionModel />}

          <button
            className={
              showSidebar
                ? "menu-trigger header__btn header__btn--active"
                : "menu-trigger header__btn"
            }
            id="menu05"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* Footer Navigation(Mobile-View) Section Starts Here */}
      <div className="footer-nav">
        <div className="home-nav">
          <a href="#home">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g data-name={1} id="_1">
                <path d="M395.49,450H125.8a15,15,0,0,1-15-15V197a15,15,0,0,1,30,0V420H380.49V197a15,15,0,1,1,30,0V435A15,15,0,0,1,395.49,450Z" />
                <path d="M445.11,261.65a15,15,0,0,1-10.61-4.39L260.64,83.4,86.78,257.26a15,15,0,0,1-21.21-21.21L250,51.58a15,15,0,0,1,21.21,0L455.72,236.05a15,15,0,0,1-10.61,25.6Z" />
                <path d="M304.15,450h-87a15,15,0,0,1-15-15V305.48a15,15,0,0,1,15-15h87a15,15,0,0,1,15,15V435A15,15,0,0,1,304.15,450Zm-72-30h57V320.48h-57Z" />
              </g>
            </svg>
            <span>Home</span>
          </a>
        </div>

        <div className="home-nav">
          <a activeClassName="link-active" href="/marketplace">
            <svg
              id="Layer_1"
              style={{ enableBackground: "new 0 0 256 256" }}
              version="1.1"
              viewBox="0 0 256 256"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path d="M92.4,129H60.9c-2.7,0-4.9,2.2-4.9,4.9v25.9c0,2.7,2.2,4.9,4.9,4.9h31.5c2.7,0,4.9-2.2,4.9-4.9v-25.9   C97.3,131.2,95.1,129,92.4,129z M87.5,154.9H65.7v-16.1h21.8V154.9z" />
                <path d="M143.8,129h-31.5c-2.7,0-4.9,2.2-4.9,4.9v25.9c0,2.7,2.2,4.9,4.9,4.9h31.5c2.7,0,4.9-2.2,4.9-4.9v-25.9   C148.7,131.2,146.5,129,143.8,129z M138.9,154.9h-21.8v-16.1h21.8V154.9z" />
                <path d="M195.3,129h-31.5c-2.7,0-4.9,2.2-4.9,4.9v25.9c0,2.7,2.2,4.9,4.9,4.9h31.5c2.7,0,4.9-2.2,4.9-4.9v-25.9   C200.2,131.2,198,129,195.3,129z M190.4,154.9h-21.8v-16.1h21.8V154.9z" />
                <path d="M248.6,90.7l-17.2-51.9c-0.7-2-2.5-3.4-4.6-3.4H29.3c-2.1,0-4,1.3-4.6,3.4L7.4,90.7c-0.4,0.7-0.6,1.4-0.6,2.3   c-0.1,2.7,2.2,4.9,4.9,5c6.7,0.2,13.1,2.7,17.8,7.2c0.7,0.7,1.5,1.4,2.3,2.1l-0.1,108.4c0,1.3,0.5,2.5,1.4,3.5   c0.9,0.9,2.2,1.4,3.5,1.4h182.8c2.7,0,4.9-2.2,4.9-4.9l0-108.5c0.7-0.6,1.5-1.2,2.1-1.9c4.9-4.5,11.2-7.1,18-7.3   c2.7-0.1,4.8-2.4,4.8-5C249.2,92.2,248.9,91.4,248.6,90.7z M214.5,210.7h-173l0-19.7h172.9L214.5,210.7z M214.5,181.3H41.5   l0.1-68.9c2.7,0.8,5.5,1.3,8.4,1.3c7.7,0,15-3,20.5-8.5c9.7-9.7,26.6-9.6,36.9,0.1c5.6,5.4,12.9,8.4,20.6,8.4c7.7,0,15-3,20.6-8.4   c10.1-9.7,27-9.7,36.9-0.1c5.5,5.5,12.7,8.5,20.5,8.5c2.9,0,5.7-0.5,8.5-1.3L214.5,181.3z M219.6,98.2c-0.6,0.6-1.3,1.2-2.1,1.8   c-0.6,0.3-1.1,0.6-1.6,1.1c-3,1.8-6.4,2.8-9.9,2.8c-5.1,0-9.9-2-13.6-5.7c-13.7-13.2-36.8-13.2-50.6,0c-3.8,3.6-8.7,5.6-13.8,5.7   c-5.1,0-10.1-2-13.9-5.7c-7-6.6-16.3-9.9-25.5-9.9c-9.2,0-18.4,3.3-25.1,10c-3.6,3.6-8.4,5.6-13.5,5.6c-3.4,0-6.7-0.9-9.7-2.6   c-0.5-0.6-1.2-1-1.9-1.3c-0.7-0.5-1.4-1.1-2.1-1.8c-5-4.7-11.3-7.9-17.9-9.2l14.5-43.7h190.3l14.5,43.7   C230.9,90.3,224.7,93.4,219.6,98.2z" />
              </g>
            </svg>
            <span>Marketplace</span>
          </a>
        </div>

        <div className="home-nav">
          <a
            activeClassName="link-active"
            href="/collections"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            data-bs-offset="0,10"
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g id="about">
                <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />
                <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />
              </g>
            </svg>
            <span>My Collection</span>
          </a>
        </div>

        <div className="home-nav">
          <a activeClassName="link-active" href="/login">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z" />
              </g>
            </svg>
            <span>Login</span>
          </a>
        </div>

        <div className="home-nav">
          <a href="#">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title />
              <path
                d="M12,17a1,1,0,0,1-1-1v-.21a4.7,4.7,0,0,1,2.75-4.19A4,4,0,0,0,12,4h0A4,4,0,0,0,8,8,1,1,0,0,1,6,8a6,6,0,0,1,6-6h0a6.08,6.08,0,0,1,6,6,6,6,0,0,1-3.37,5.39A2.73,2.73,0,0,0,13,15.79V16A1,1,0,0,1,12,17Z"
                fill="#9b9b9b"
              />
              <circle cx={12} cy={20} fill="#9b9b9b" r={1} />
            </svg>
            <span>Help</span>
          </a>
        </div>
      </div>
      {/* Footer Navigation(Mobile-View) Section Ends Here */}
    </header>
  );
};
export default Header;
