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
    content: { position: 'relative', color: 'white', inset: '0', backgroundColor: 'black', border: 'none', borderRadius: '5px', overflow: 'none', padding: '0' }
  }
  return (
    <ReactModal
      isOpen={popup}
      style={customStyles}
      onRequestClose={() => handleClose()}
    >
      <h2 className="text-center text-24 text-white mt-58"> Connect Wallet </h2>
      <p className="text-white mb-34 text-center px-24 lg:px-72"> Connect with one of our wallet providers or create new one</p>
      <div class="text-sm text-white px-28 border-gray-200 mb-79">
        <ul class="rounded-8 card-shadow bg-black w-full mx-auto my-60 border">
          <li onClick={() => connect('meta')} class="wallet-item flex items-center justify-between px-26 py-22 border-b cursor-pointer">
            <div class=" flex justify-between text-gray-500 items-center gap-5 font-normal text-16 cursor-pointer transition-all">
              <img class="w-24" src="/assets/metamask.webp" alt="" />
              MetaMask</div>
            <div class="bg-white text-gray-800 px-16 py-3 rounded-20">
              Popular
            </div>
          </li>
          <li onClick={() => connect('')} class="wallet-item flex items-center justify-between px-26 py-22 border-b cursor-pointer">
            <div class=" flex justify-between text-gray-500 items-center gap-5 font-normal text-16 cursor-pointer transition-all">
              <img class="w-24" src="https://ik.imagekit.io/xanalia/Images/WalletConnect.svg" alt="" />
              MetaMask
            </div>
            <div class="bg-white text-gray-800 px-16 py-3 rounded-20">
              Popular
            </div>
          </li>
          {/* <li class="wallet-item flex items-center justify-between px-26 py-22 border-b cursor-pointer"><div class=" flex justify-between text-gray-700 items-center gap-5 font-normal text-16 cursor-pointer transition-all"><img class="w-24" src="/assets/coinbase.svg" alt="" />Coinbase</div></li> */}
          {/* <li class="wallet-item flex items-center justify-between px-26 py-22 border-b cursor-pointer"><div class=" flex justify-between text-gray-700 items-center gap-5 font-normal text-16 cursor-pointer transition-all"><img class="w-24" src="/assets/phantom.webp" alt="" />Phantom</div></li> */}
        </ul>
      </div>
      <div onClick={() => connect('meta')} className="bg-white text-black py-18 px-28 mt-44 cursor-pointer">
        <p className="text-black-300 font-medium text-center"> Connect Wallet </p>
      </div>
      {/* <div className="wallet-modal">
        <div style={{ display: 'none' }}>
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
      </div> */}
    </ReactModal>
  )
}
export default ConnectionModel