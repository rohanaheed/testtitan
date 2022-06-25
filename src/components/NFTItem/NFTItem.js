import React from "react";
import { FaEthereum } from "react-icons/fa";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NFTItem = () => {
  const history = useHistory();
  return (
    <div className="nft-item" onClick={() => history.push("/item-details")}>
      <img
        src="assets/images/marketPlace/1.jpg"
        alt="product"
        className="nft-img"
      />
      <p className="fw-bold">1 Farizul Marlias</p>
      <hr className="full-hr" />
      <div className="d-flex justify-content-between align-items-start">
        <div className="text-start">
          <p className="fw-bold text-muted m-0 font-xs">LISTING PRICE</p>
          <p className="m-0 font-sm">
            <FaEthereum />
            9.15 ETH
          </p>
          <p>
            <small className="text-muted font-sm">-$30,000.00</small>
          </p>
        </div>

        <div className="text-end">
          <p className="fw-bold text-muted m-0 font-xs">EDITION</p>
          <p className="m-0 font-sm">#7</p>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-start">
        <div className="text-start">
          <p className="fw-bold text-muted m-0 font-xs">OWNED BY</p>
          <p className="m-0 font-sm">JDTDigital</p>
        </div>

        <div className="text-end">
          {/* <p className="fw-bold text-muted m-0 font-xs">BRAND</p> */}
          {/* <p className="m-0 font-sm">Dictador</p> */}
        </div>
      </div>
    </div>
  );
};

export default NFTItem;
