import React from "react";
import Footer from "../../components/layout/Footer";
import { FaSync } from "react-icons/fa";

import Header from "../../components/layout/Header";
import NFTItem from "../../components/NFTItem/NFTItem";

const Marketplace = () => {
  return (
    <div>
      {" "}
      <div>
        <Header />
        <React.Fragment>
          <div
            className="container-fluid px-4 mt-5 marketplace"
            style={{ width: "80%" }}
          >
            <div className="marketplace-title">
              <h3>MARKETPLACE</h3>
              <div className="fs-3 fw-bold currency-icons">
                <img src="assets/images/cru-logo/dollar.png" width={15} />
                <img
                  src="assets/images/favicon123.png"
                  style={{ marginLeft: "5px", background: "black" }}
                  width={30}
                />
                <img
                  src="assets/images/cru-logo/polygon.png"
                  style={{ marginLeft: "5px" }}
                  width={22}
                />
              </div>
            </div>

            <hr className="hr-opacity-07 mb-0" />
            <div className="d-flex pb-5">
              <div className="filter-field">
                <p className="fs-4 fw-bold">Filters</p>

                <div>
                  <p className="fw-bold text-muted">Collection</p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Whisky"
                    />
                    <label className="form-check-label" htmlFor="Whisky">
                      The Club
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Cognac"
                    />
                    <label className="form-check-label" htmlFor="Cognac">
                      Johor Darul Ta’zim F.C.
                    </label>
                  </div>
                </div>

                <hr className="hr-opacity-07 mb-0" />

                <div className="mt-3">
                  <p className="fw-bold text-muted">Price</p>
                  <select
                    className="form-select form-select-sm default-select"
                    defaultValue="ETH"
                  >
                    <option className="default-option" value="ETH">
                      ETH
                    </option>
                    <option className="default-option" value="USD">
                      USD
                    </option>
                  </select>
                  <div className="d-flex mt-3">
                    <input
                      type="number"
                      className="form-control form-control-sm me-3 default-input-number"
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      className="form-control form-control-sm default-input-number"
                      placeholder="Max"
                    />
                  </div>
                </div>

                <hr className="hr-opacity-07 mb-0" />

                <div className="mt-3">
                  <p className="fw-bold text-muted">Rarity</p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Dictador"
                    />
                    <label className="form-check-label" htmlFor="Dictador">
                      Hall of Fame
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Glenfiddich"
                    />
                    <label className="form-check-label" htmlFor="Glenfiddich">
                      Legend
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Hennessy"
                    />
                    <label className="form-check-label" htmlFor="Hennessy">
                      Lifelong Fan
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Patron"
                    />
                    <label className="form-check-label" htmlFor="Patron">
                      Ultras
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Salute"
                    />
                    <label className="form-check-label" htmlFor="Salute">
                      Epic
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Dalmore"
                    />
                    <label className="form-check-label" htmlFor="Dalmore">
                      Super Rare
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Dictador"
                    />
                    <label className="form-check-label" htmlFor="Dictador">
                      Rare
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Dictador"
                    />
                    <label className="form-check-label" htmlFor="Dictador">
                      Hardcore Fan
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Dictador"
                    />
                    <label className="form-check-label" htmlFor="Dictador">
                      Fan
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Dictador"
                    />
                    <label className="form-check-label" htmlFor="Dictador">
                      Common
                    </label>
                  </div>
                </div>

                <hr className="hr-opacity-07 mb-0" />

                <button type="button" className="btn btn-lg mt-3 apply-btn">
                  <FaSync />
                  <span className="ms-2">APPLY</span>
                </button>
              </div>

              {/* NFT item field */}
              <div className="item-field">
                <div className="d-flex justify-content-between align-items-end">
                  <p className="fw-bold text-muted m-0">RESULTS 36</p>
                  <div>
                    <select
                      className="form-select form-select-sm default-select"
                      defaultValue="ETH"
                    >
                      <option className="default-option" value="price">
                        Price
                      </option>
                      <option className="default-option" value="released">
                        Data Released
                      </option>
                    </select>
                  </div>
                </div>

                <div className="row no-gutters marketplace-result">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3  mt-4">
                    <NFTItem />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
        <Footer />
      </div>
    </div>
  );
};

export default Marketplace;
