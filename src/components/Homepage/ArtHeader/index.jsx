import { useState } from 'react';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import PlaceBidModal from '../../PlaceBidModal'
import ConnectWalletModal from '../../ConnectWalletModal'
import ContactModal from '../../ContactModal'

const ArtHeader = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isPlaceBidModalOpen, setIsPlaceBidModalOpen] = useState(false);
    const [isConnectWalletModalOpen, setIsConnectWalletModalOpen] = useState(false);

    return (
        <main className="bg-gray-900 mb-99 h-header">
                    <div className='flex flex-col lg:flex-row items-center'>
                    <div className='w-full h-header bg-red-500 bg-cover bg-top bg-no-repeat' style={{backgroundImage: 'url(/assets/bg-artist.jpg)'}}>
                    </div>
                        <div className='w-full flex flex-col justify-center h-header ml-auto mr-auto px-99 py-99' style={{backgroundImage: 'url(/assets/bg-header.png)'}}>
                            <h3 className="text-3xl font-semibold text-white">Mona Lisa</h3>
                            <h5 className="text-md font-normal text-white pb-20 mb-12 border-b border-gray-500">Painting by Leonardo da Vinci</h5>
                            <h5 className="text-md font-light text-white">Price</h5>
                            <h3 className="text-3xl font-semibold text-white pb-20 mb-12 border-b border-gray-500">$10,000</h3>
                            <h3 className="text-3xl font-semibold text-white">Description</h3>
                            <p className="mt-4 text-lg text-gray-300 pb-20 mb-12 border-b border-gray-500">
                            Leonardo was born an illegitimate son of a Florentine noble and peasant woman; he grew up in Vinci, Italy. In his formative years, he developed a love of nature and from an early age began to display his remarkable academic and artistic talents. </p>
                            <div className="flex items-center gap-6">
                                <button onClick={() => setIsPlaceBidModalOpen(!isPlaceBidModalOpen)} className="white-shadow bg-white transition-all hover:bg-gray-900 hover:text-white rounded-8 py-8 px-26 mt-24">Place Bid</button> 
                                <PlaceBidModal isOpen={isPlaceBidModalOpen} setIsOpen={setIsPlaceBidModalOpen} />
                                
                                <button onClick={() => setIsConnectWalletModalOpen(!isConnectWalletModalOpen)} className="white-shadow bg-white transition-all hover:bg-gray-900 hover:text-white rounded-8 py-8 px-26 mt-24">Connect Wallet</button> 
                                <ConnectWalletModal isOpen={isConnectWalletModalOpen} setIsOpen={setIsConnectWalletModalOpen} />
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