import React, { useEffect, useState } from "react";
// import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "../../components/wallet/connector";
import { Dialog } from "@mui/material";

const WalletModel = ({ open, handleClose }) => {
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  const data = useWeb3React();
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
      } else {
        await activate(walletconnect);
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
        <div style={{ borderRadius: "5px", display: 'flex', padding: '35px' }}>
          <div className="top_row" style={{ borderRadius: "5px", display: 'flex' }}>
            <div className="left"
              style={{ padding: '25px', textAlign: 'center' }}
              onClick={() => connect('meta')}
            >
              <div style={{ marginTop: "20px", marginLeft: '60px', cursor: 'pointer' }}>
                <img src="https://ik.imagekit.io/xanalia/Images/metmask-icon.svg" />
              </div>
              <div style={{ fontSize: "18px" }}>Metamask</div>
              Connect to your MetaMask Wallet
            </div>
            <div className="right"
              style={{ padding: '25px', textAlign: 'center', cursor: 'pointer' }}
              onClick={() => connect('wallet')}
            >
              <div style={{ marginTop: "25px", marginLeft: '50px' }}>
                <img src="https://ik.imagekit.io/xanalia/Images/WalletConnect.svg" />
              </div>
              <div style={{ fontSize: "18px", marginTop: "23px" }}>Wallet Connect</div>
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
