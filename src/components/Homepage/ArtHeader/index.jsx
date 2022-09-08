import { useEffect, useState } from 'react';
import PlaceBidModal from '../../PlaceBidModal'
// import ConnectWalletModal from '../../ConnectWalletModal'
import ContactModal from '../../ContactModal'
import { API_URL } from '../../../utils/contant';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useWeb3React } from '@web3-react/core';
import ConnectionModel from '../../common/ConnectionModel';

const ArtHeader = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isPlaceBidModalOpen, setIsPlaceBidModalOpen] = useState(false);
    const [isConnectWalletModalOpen, setIsConnectWalletModalOpen] = useState(false);
    const { id } = useParams()
    const Token = JSON.parse(localStorage.getItem('user_data'))?.token;
    const [res, setRes] = useState(null);
    const { account, deactivate } = useWeb3React();
    console.log(res)
    useEffect(() => {
        _getList()
    }, [])

    const _getList = () => {
        const headers = {
            Authorization: `Bearer ${Token}`,
        };
        axios.get(API_URL + `user/nft/${id}`, { headers: headers })
            .then(res => {
                setRes(res?.data)
                // setLoader(false)
            })
            .catch(err => {
            })
    }

    return (
        <main className="bg-gray-900 mb-99 h-header">
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='w-full h-header-img bg-gray-900 bg-cover bg-top bg-no-repeat' style={{ backgroundImage: `url(${res?.image ? res?.image :"/assets/bg-artist.jpg"})` }}>
                </div>
                <div className='w-full flex flex-col justify-center h-header mx-auto px-34 py-42 lg:p-99' style={{ backgroundImage: 'url(/assets/bg-header.png)' }}>
                    <h3 className="text-3xl font-semibold text-white pt-16">{res?.name ? res?.name : "Mona Lisa"}</h3>
                    <h5 className="text-md font-normal text-white pb-20 mb-12 border-b border-gray-500">Painting by <span className='text-primary'>{res?.artistName ? res?.artistName : "Leonardo da Vinci"}</span></h5>
                    <h5 className="text-md font-light text-white">Price</h5>
                    <h3 className="text-3xl font-semibold text-primary pb-20 mb-12 border-b border-gray-500">{res?.price ? '$' + res?.price : "$10,000"}</h3>
                    <h3 className="text-3xl font-semibold text-white">Description</h3>
                    <p className="mt-4 text-lg text-gray-300 pb-20 mb-12 border-b border-gray-500">
                        {res?.description ? res?.description :
                            " Leonardo was born an illegitimate son of a Florentine noble and peasant woman; he grew up in Vinci, Italy. In his formative years, he developed a love of nature and from an early age began to display his remarkable academic and artistic talents."
                        }
                    </p>
                    <div className="flex items-center gap-3 md:gap-6">
                        <PlaceBidModal isOpen={isPlaceBidModalOpen} setIsOpen={setIsPlaceBidModalOpen} />

                        {account ?
                            <button onClick={() => setIsPlaceBidModalOpen(!isPlaceBidModalOpen)} className="white-shadow text-12 md:text-16 bg-white transition-all hover:bg-gray-900 hover:text-white rounded-8 py-8 px-16 md:px-26 mt-24">Place Bid</button>
                            : <button onClick={() => setIsConnectWalletModalOpen(!isConnectWalletModalOpen)} className="white-shadow  text-12 md:text-16 bg-white transition-all hover:bg-gray-900 hover:text-white rounded-8 py-8 px-16 md:px-26 mt-24">Connect Wallet</button>
                        }
                        <ConnectionModel popup={isConnectWalletModalOpen} onClose={() => setIsConnectWalletModalOpen(false)} />
                        {/* <ConnectWalletModal isOpen={isConnectWalletModalOpen} setIsOpen={setIsConnectWalletModalOpen} /> */}
                    </div>
                    <section className="flex items-center justify-end gap-3 mt-28">
                        <h5 className="text-md font-light text-white">Query?</h5>
                        <h5 onClick={() => setIsContactModalOpen(!isContactModalOpen)} className="text-md font-semibold text-white cursor-pointer">Contact Us</h5>
                        <ContactModal isOpen={isContactModalOpen} setIsOpen={setIsContactModalOpen} />
                    </section>
                </div>
            </div>
        </main>
    )
}

export default ArtHeader;