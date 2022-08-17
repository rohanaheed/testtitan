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
    } catch (ex) {
      console.log(ex)
    }
  }

  const isxs = useMediaQuery({ query: '(min-width: 486px)' })

  const customStyles = {
    content: { position: 'relative', inset: '0', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '8px', width: isxs ? '28rem' : '92%', margin: '0 auto', padding: '0', height: '10rem', overflow: 'hidden' }
  }
  return (
    <ReactModal
      isOpen={popup}
      style={customStyles}
      onRequestClose={() => handleClose()}
    >
      <div>
        <div style={{ display: 'flex' }}>
          {/* <img src="/assets/images/favicon.png" width={40} /> */}
          <h6 style={{ marginLeft: '5px', marginTop: '10px' }}>Connect Your Wallet!</h6>
        </div>
        <button style={{ background: 'transparent', color: 'white', border: 'unset' }} onClick={handleClose}>X</button>
        <div style={{ marginLeft: '15px', display: 'flex', cursor: 'pointer' }} onClick={() => connect('meta')}>
          <img src="https://ik.imagekit.io/xanalia/Images/metmask-icon.svg" width={30} />
          <h6 style={{ marginLeft: '30px', marginTop: '5px' }}>MetaMask Wallet</h6>
        </div>
        <div style={{ marginLeft: '15px', display: 'flex', cursor: 'pointer', marginTop: '20px', marginBottom: '20px' }} onClick={() => connect('')}>
          <img src="https://ik.imagekit.io/xanalia/Images/WalletConnect.svg" width={30} />
          <h6 style={{ marginLeft: '30px', marginTop: '5px' }}>Wallet Connect</h6>
        </div>
      </div>
    </ReactModal>
  )
}
export default ConnectionModel