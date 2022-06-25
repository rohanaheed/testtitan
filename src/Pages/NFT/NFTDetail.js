import React, { useEffect, useState } from "react";
// import { Card, ListGroup } from "react-bootstrap";
import { Modal } from "react-bootstrap";
// import WalletConnect from "walletconnect";
import WalletConnectProvider from "@walletconnect/web3-provider";
// import { AiFillFacebook, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { ethers } from "ethers";
import abi from "./nftAbi";

import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "../../components/wallet/connector";
// import { ToastContainer } from 'react-toastify';

const NFTDetail = () => {
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  const data = useWeb3React();
  const [modalShow, setModalShow] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [should, setShould] = useState(false)
  // const [connButtonText, setConnButtonText] = useState('Connect Wallet');
  const [n, setN] = useState(1);
  const [w3p, setProvider] = useState(null);
  const [sold, setSold] = useState(0);
  const [modalShowDis, setModalShowDis] = useState(false);


  useEffect(() => {
    if (library?._provider && should) {
      setProvider(library?._provider);
      setShould(false);
    } else if (library?.givenProvider && should) {
      setProvider(library?.givenProvider);
      setShould(false);
    }
  }, [library, should])

  const connect = async (name) => {
    try {
      if (name === 'meta') {
        await activate(injected)
      } else {
        await activate(walletconnect);
      }
      setModalShow(false);
      setShould(true);
    } catch (ex) {
      console.log(ex)
    }
  }

  const buy = () => {
    if (account !== null || account !== undefined || account !== "") {
      let web3 = new Web3(w3p);
      let contract = new web3.eth.Contract(
        abi,
        "0x35Ac496D61D149EcCEb7F75DE61104477f1aee80"
      )
      contract.methods.mint(n).send({ from: account, value: web3.utils.toWei(String(n * 0.4)) })
        .then((res) => {
          console.log("res buy", res);
        })
        .catch((err) => {
          console.log("err buy", err);
        })
    }
  }
  const handleDisconnect = async () => {
    try {
      await deactivate()
      localStorage.removeItem('UserAddress');
      localStorage.removeItem('walletconnect')
      // setDefaultAccount(null);
      setModalShowDis(false)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function getValues() {
    let web3 = new Web3("https://mainnet.infura.io/v3/de7757285d664cb6af8239c7fd98a7cc");
    let contract = new web3.eth.Contract(
      abi,
      "0x35Ac496D61D149EcCEb7F75DE61104477f1aee80"
    )

    contract.methods.sold().call().then((res)=>{
      setSold(res)
      console.log("res   ", res);
    }).catch((err)=>{
      console.log("err   ", err);
    })


    // let web3 = new Web3("https://bsc-dataseed.binance.org");
    // let token = new web3.eth.Contract(
    //   abi,
    //   "0x69d10c8Bd0de1a9345AFA36819490D8BbCE0E5A3"
    // )

  }
  useEffect(() => {
    getValues()
  }, []);

  return (

    <div className="mint-section">

    <Modal
        show={modalShowDis}
        onHide={() => setModalShowDis(false)}
        size="lg"
        className="wallet"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div style={{ borderRadius: "5px" }}>
          <div className="top_row" style={{ textAlign: 'center', justifyContent: 'center', padding: '35px', display: 'block', cursor: 'pointer', color: 'black' }} onClick={() => handleDisconnect()}>
            <div style={{ fontSize: "18px", textDecoration: 'underline' }}>Disconnect</div>
            <div style={{ fontSize: "18px" }}>{account}</div>
          </div>
        </div>
      </Modal>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        className="wallet"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div style={{ borderRadius: "5px" }}>
          <div className="top_row">
            <div className="left"
              onClick={() => connect('meta')}
            // onClick={() => connectWalletHandler()}
            >
              <div style={{ marginTop: "30px" }}>
                <img src="https://ik.imagekit.io/xanalia/Images/metmask-icon.svg" />
              </div>
              <br />
              <div style={{ fontSize: "18px" }}>Metamask</div>
              Connect to your MetaMask Wallet
              <br />
              <br />
            </div>
            <div className="right"
              // onClick={() => handleConnect()}
              onClick={() => connect('wallet')}
            >
              <div style={{ marginTop: "30px" }}>
                <img src="https://ik.imagekit.io/xanalia/Images/WalletConnect.svg" />
              </div>
              <br />
              <br />
              <div style={{ fontSize: "18px" }}>Wallet Connect</div>
              Connect to your favorite Wallet
              <br />
              <br />
            </div>
          </div>
        </div>
      </Modal>
      <div className="mint-container">
        <div className="mint-content">
          <div className="mint-wallet">
            {account ?
             <div>
                <div className="action text-muted" onClick={() => buy()}> <button className="connect-wallet" type="button">
                MINT NOW
              </button> </div>
              <div className="action text-muted" onClick={() => setModalShowDis(true)}> <button className="connect-wallet" type="button">
                Disconnect
              </button> </div>
              </div> :
              <div className="action text-muted" onClick={() => setModalShow(true)}> <button className="connect-wallet" type="button">
                CONNECT WALLET
              </button> </div>

            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
