import { useWeb3React } from "@web3-react/core";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { injected, walletconnect } from "../wallet/connector";
import ReactModal from "react-modal"
import { useMediaQuery } from 'react-responsive'
const ConnectionModel = ({ popup, onClose }) => {
  const history = useHistory()
  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  const handleClose = () => {
    onClose()
  };

  const connect = async (name) => {
    try {
      if (name === 'meta') {
        await activate(injected);
        localStorage.setItem('type', 'meta');
        handleClose();
      } else {
        // console.log("abc", walletconnect)
        await activate(walletconnect);
        localStorage.setItem('type', 'wallet');
        handleClose();
      }
      localStorage.setItem('user', true);
    } catch (ex) {
      console.log(ex)
    }
  }

  const isxs = useMediaQuery({ query: '(min-width: 486px)' })

  const customStyles = {
    content: { position: 'relative', inset: '0', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px', overflow: 'none', padding: '0' }
  }
  return (
    <ReactModal
      isOpen={popup}
      style={customStyles}
      onRequestClose={() => handleClose()}
    >
      <div className="wallet-modal">
        <div style={{ display: 'none' }}>
          {/* <img src="/assets/images/favicon.png" width={40} /> */}
          <h6 style={{ marginLeft: '5px', marginTop: '10px' }}>Connect Your Wallet!</h6>
        </div>
        <button className="close-wallet" onClick={handleClose}>X</button>
        <div className="top_row connection-modal">
          <div className="left" onClick={() => connect('meta')}>
            <div className="mt-none">
              <img src="https://ik.imagekit.io/xanalia/Images/metmask-icon.svg" />
            </div>
            <div className="whitespace-nowrap">MetaMask Wallet</div>
          </div>
          <div className="right" onClick={() => connect('')}>
            <div className="mt-none">
              <img src="https://ik.imagekit.io/xanalia/Images/WalletConnect.svg" />
            </div>
            <div className="wallet-title">Wallet Connect</div>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}
export default ConnectionModel