import React from 'react';
import { InjectedConnector } from '@web3-react/injected-connector';
import {
    UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
    WalletConnectConnector,
} from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
})

export const walletconnect = new WalletConnectConnector({
    rpc: {
        1: "https://mainnet.infura.io/v3/de7757285d664cb6af8239c7fd98a7cc"
    },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    pollingInterval: 12000
})