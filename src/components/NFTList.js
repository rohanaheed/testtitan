import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { cancelTodos, getTodos } from "../redux/todos/todoSlice";
import Accordian from "./common/Accordian";
import NFTItem from "./NFTItem/NFTItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NFTList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const settings = useMemo(() => {
    return {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,

      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }, []);

  return (
    <div>
      {/* ===============//banner section start here \\================= */}
      <div className="container-fluid px-5 mt-5 nft-container" style={{ width: "80%" }}>
        <div className="banner-wrapper">
          <div className="align-items-center g-5 nft-landing">
            <div className="banner-description">
              <div className="banner-content">
                <h1>
                  DIGITAL
                </h1>
                <h1>
                  FOOTBALL
                </h1>
                <h1>
                  MARKETPLACE
                </h1>
                <p className="home-banner-title">
                  Digital Marketplace For Crypto Collectibles And Non-Fungible
                  Tokens. Buy, Sell, And Discover Exclusive Digital Assets.
                </p>
                <div className="banner-btns d-flex flex-wrap">
                  <div
                    data-blast="bgColor"
                    onClick={() => history.push('/marketplace')}
                    className="default-btn move-top"
                    style={{ background: "#6722EF" }}
                  >
                    <span>Explore</span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="home-banner-video">
              <video
                src="assets/images/home_cards/homeVideo.mp4"
                autoPlay
                muted
              ></video>
            </div>
          </div>
        </div>
      </div>

      <div
        className="auction-section nft-tabs padding-bottom"
      >
        <div className="container-fluid nft-container px-5 mt-5">
          <div className="row product-details">
            <img
              className="col col-12 col-sm-6"
              src="assets/image/product/how-to-buy.png"
              alt="Buy a pack"
            />
            <img
              className="col col-12 col-sm-6"
              src="assets/image/product/explore-marketplace.png"
              alt="Explore marketplace"
            />
          </div>
        </div>
      </div>

      <section className="marketplace-wrapper unique-nft">
        <section id="marketplace" className="row remove-margin">
          <div className="mp-wrapper col-md-4 remove-padding">
            <div className="mp-container text-start">
              <h4 className="mp-heading text-start">MARKETPLACE</h4>
              <p className="mp-description text-start pt-4">
                Explore the marketplace to acquire your next unique NFT.
              </p>

              <Link
                data-blast="bgColor"
                to="/marketplace"
                className="default-btn move-top mt-4"
                style={{ background: "#6722EF" }}
              >
                <span>Explore more</span>{" "}
              </Link>
            </div>
          </div>
          <div className="col-md-8 slider-wrapper">
            <div className="slider-container">
              <Slider {...settings}>
                <NFTItem />
                <NFTItem />
                <NFTItem />
                <NFTItem />
                <NFTItem />
                <NFTItem />
              </Slider>
            </div>
          </div>
        </section>
      </section>
      {/* <div
        className="auction-section padding-bottom"
        style={{ width: "80%", marginLeft: "10%", marginRight: "10%" }}
      >
        <div className="container-fluid px-5 mt-5">
          <div className="section-header style-4">
            <div className="header-shape">
              <span />
            </div>
            <h3> Marketplace </h3>
          </div>
          <div className="row no-gutters">
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
      </div> */}

      <div
        className="auction-section padding-bottom nft-tabs"
      >
        <div className="ontainer-fluid nft-container px-5 mt-5">
          <div className="section-header style-4">
            <div className="header-shape">
              <span />
            </div>
            <h3> Trending </h3>
          </div>
          <div className="row no-gutters">
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

      {/* ===============//Featured Teams start here \\================= */}
      <div
        className="auction-section nft-tabs padding-bottom"
      >
        <div className="container-fluid nft-container px-5 mt-5">
          <div className="section-header style-4">
            <div className="header-shape">
              <span />
            </div>
            <h3> Collections </h3>
          </div>
          <div className="section-wrapper" style={{ textAlign: "center" }}>
            <img
              src="assets/images/favicon.png"
              alt="author-img"
              width={"20%"}
            />
            <img
              src="assets/images/NFTS/IMG_8763.jpg"
              alt="author-img"
              width={"20%"}
            />
            <img
              src="assets/images/NFTS/Johor.png"
              alt="author-img"
              width={"15%"}
            />
          </div>
        </div>
      </div>
      <div
        className="auction-section nft-tabs padding-bottom"
      >
        <div className="container-fluid nft-container px-5 mt-5">
          <h3 className="faq-title"> FAQ </h3>
          <Accordian title="WHAT IS FIRST ELEVEN (F11)?">
            <p>
              F11 is a digital marketplace and platform for all football fans
              and stakeholders. We are a community of football diehards who wish
              to connect our passion for football with our love of
              cryptocurrency. F11 is a platform that offers NFTs (digital
              assets) directly curated and minted from the biggest global
              football clubs and players. Each NFT corresponds to a licensed and
              commercial arrangement between F11 and the respective I.P holder.
              Our community has the ability to purchase F11 NFTs via multiple
              payment methods, including $F11 tokens. First Eleven proves
              authenticity via Ethereum’s blockchain. By buying the NFT directly
              from F11, we not only make the process easier, but we ensure that
              your asset has proven authenticity. Whether you grow your
              collection, send it as a gift, or resell it, authenticity will
              never be an issue.
            </p>
          </Accordian>
          <Accordian title="DO YOU WORK DIRECTLY WITH CLUBS AND PLAYERS?">
            <p>
              Yes, F11 works directly with the best football clubs and players
              around the world. We work alongside multiple stakeholders to help
              mint and deliver their own personal NFT collections. One of the
              central reasons why we started F11 was to connect the biggest
              football clubs and players around the world with a larger audience
              of football enthusiasts.
            </p>
          </Accordian>
          <Accordian title="WILL FIRST ELEVEN BE WORKING WITH MULTIPLE CLUBS AND PLAYERS?">
            <p>
              Yes! We are constantly evolving and adding new collections to our
              platform, for our F11 community.
            </p>
          </Accordian>
          <Accordian title="WHAT ARE THE FEES?">
            <p>
              F11 fee structure is very simplistic. Collectors receive 90% of
              their selling price, the remaining percentage is split between F11
              and the respective Club or Player. These fees support F11’s
              innovation to grow and cover internal costs associated with
              servicing the NFT platform.
            </p>
          </Accordian>
          <Accordian title="HOW DO TRANSACTIONS WORK ON FIRST ELEVEN? ">
            <p>
              F11 is powered by Ethereum, which secures payments and registers
              ownership of all NFT’s. There are many actions you can take on F11
              which, behind the scenes, are blockchain transactions on Ethereum.
              We've tried to eliminate complexity and have focused our platfrom
              upon functionality simplicity to make collecting on F11 as simple
              as possible. Here is a step by step, user guide to F11. Example
              transaction | Purchasing an F11 NFT. Once you have chosen an NFT
              from our marketplace, hit BUY NOW, you'll get a pop-up from your
              Ethereum wallet provider (e.g. MetaMask) asking you to confirm the
              transaction details, and maybe set a gas (network fee) price. When
              you click to approve the details of that pop-up, your bid
              transaction is submitted to the Ethereum network. At this point,
              the transaction is pending and awaiting confirmation by the
              network. While a transaction is pending, you'll see a small
              message at the bottom of the screen, from which you can link to
              view the transaction on Etherscan, an Ethereum monitoring tool.
              Pending transactions can confirm within just a few seconds or take
              longer, depending on the gas (network fee) price you set, as well
              as how busy the Ethereum network is at the time. Once your
              purchase is confirmed by the network, the F11 platform and your
              personal digital wallet will be updated within a few seconds to
              reflect it. WHAT IF I DON’T HAVE A DIGITAL WALLET? No problem - If
              you don't currently have a digital wallet we recommend creating
              one, however it is not a requirement. Collectors can pay by credit
              cards. The NFT will then show up in your collection page and will
              be linked to your account. The actual NFT will be in F11 custodial
              wallet, which will reference the user who actually owns it, and is
              protected by Fireblocks. Users can interact with the website in
              the same manner, and at
            </p>
          </Accordian>
          <Accordian title="WHAT IF I DON’T HAVE A DIGITAL WALLET?">
            <p>
              No problem - If you don't currently have a digital wallet we
              recommend creating one, however it is not a requirement.
              Collectors can pay by credit cards. The NFT will then show up in
              your collection page and will be linked to your account. The
              actual NFT will be in F11 custodial wallet, which will reference
              the user who actually owns it, and is protected by Fireblocks.
              Users can interact with the website in the same manner, and at any
              point can transfer ownership to a wallet
            </p>
          </Accordian>
        </div>
      </div>
    </div>
  );
};
export default NFTList;
