import React, { useEffect, useState } from "react";
// import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "../../components/wallet/connector";
import { Dialog } from "@mui/material";

const WalletModel = ({ open, handleClose, admin }) => {
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  const [modalShow, setModalShow] = useState(true);
  const [should, setShould] = useState(false)
  const [n, setN] = useState(1);
  const [w3p, setProvider] = useState(null);
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
        localStorage.setItem('type', 'meta');
      } else {
        await activate(walletconnect);
        localStorage.setItem('type', 'wallet');
      }
      if(admin === "admin"){
        localStorage.setItem('admin', true);
      }
      handleClose();
      setModalShow(false);
      setShould(true);
    } catch (ex) {
      console.log(ex)
    }
  }
  const handleDisconnect = async () => {
    try {
      await deactivate()
      localStorage.removeItem('UserAddress');
      localStorage.removeItem('walletconnect')
      setModalShowDis(false)
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <div className="wallet-modal bg-white">
          <div className="top_row">
            <div className="left"
              onClick={() => connect('meta')}
            >
              <div>
                <img src="https://ik.imagekit.io/xanalia/Images/metmask-icon.svg" />
              </div>
              <div>Metamask</div>
              Connect to your MetaMask Wallet
            </div>
            <div className="right"
              onClick={() => connect('wallet')}
            >
              <div>
                <img src="https://ik.imagekit.io/xanalia/Images/WalletConnect.svg" />
              </div>
              <div>Wallet Connect</div>
              Connect to your favorite Wallet
            </div>
          </div>
        </div>
      </Dialog>
      {/* <Modal
        show={modalShowDis}
        onHide={() => setModalShowDis(false)}
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div style={{ borderRadius: "5px" }}>
          <div className="top_row" style={{ textAlign: 'center', justifyContent: 'center', padding: '35px', display: 'block', cursor: 'pointer', color: 'black' }} onClick={() => handleDisconnect()}>
            <div style={{ fontSize: "18px", textDecoration: 'underline' }}>Disconnect</div>
            <div style={{ fontSize: "18px" }}>{account}</div>
          </div>
        </div>
      </Modal> */}
    </>
  );
};

export default WalletModel;
