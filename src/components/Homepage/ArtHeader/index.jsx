import { useEffect, useState } from 'react';
import PlaceBidModal from '../../PlaceBidModal'
// import ConnectWalletModal from '../../ConnectWalletModal'
import ContactModal from '../../ContactModal'
import { API_URL } from '../../../utils/contant';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useWeb3React } from '@web3-react/core';
import ConnectionModel from '../../common/ConnectionModel';
import moment from 'moment';

const ArtHeader = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isPlaceBidModalOpen, setIsPlaceBidModalOpen] = useState(false);
    const [isConnectWalletModalOpen, setIsConnectWalletModalOpen] = useState(false);
    const { id } = useParams();
    const [show, setShow] = useState(false);
    const Token = JSON.parse(localStorage.getItem('user_data'))?.token;
    const [res, setRes] = useState(null);
    const { account, deactivate } = useWeb3React();
    const [value, setValue] = useState('');
    useEffect(() => {
        _getList()
    }, [])

    const _getList = () => {
        // const headers = {
        //     Authorization: `Bearer ${Token}`,
        // };
        axios.get(API_URL + `user/nft/${id}`)
            .then(res => {
                setRes(res?.data)
                // setLoader(false)
            })
            .catch(err => {
            })
    }


    const checkTime = (startTime, endTime) => {
        var dt = new Date();//current Date that gives us current Time also
        var s = startTime.split(':');
        var dt1 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(),
            parseInt(s[0]), parseInt(s[1]), parseInt(s[2]));

        var e = endTime.split(':');
        var dt2 = new Date(dt.getFullYear(), dt.getMonth(),
            dt.getDate(), parseInt(e[0]), parseInt(e[1]), parseInt(e[2]));
        if (dt >= dt1 && dt <= dt2) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    function getRemaining (ts) {
        const now = moment();
        const then = moment(ts);
        const diff = then.diff(now);
        const dur = moment.duration(diff);
      
        let parts = [];
        for (const part of ['days', 'hours', 'minutes', 'seconds']) {
          const d = dur[part]();
          dur.subtract(moment.duration(d, part));
          parts.push(d);
        }
        return parts;
      }
      
    function myCallback(a, b) {
        checkTime(moment(res?.startDate).format('hh:mm:ss'), moment(res?.endDate).format('hh:mm:ss'));
        const rem = getRemaining(moment(res?.endDate).format('YYYY-MM-DD hh:mm:ss'));
        console.log(rem)
        const d = new Date(res?.endDate)
        setValue(`${rem[1] + ":" + rem[2] + ":" + rem[3]}`)
    }
    const intervalID = setInterval(myCallback, 1000, 'Parameter 1', 'Parameter 2');
    return (
        <main className="bg-gray-900 mb-99 h-header">
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='w-full h-header-img bg-gray-900 bg-cover bg-top bg-no-repeat' style={{ backgroundImage: `url(${res?.image ? res?.image : "/assets/bg-artist.jpg"})` }}>
                </div>
                <div className='w-full flex flex-col justify-center h-header mx-auto px-34 py-42 lg:p-99' style={{ backgroundImage: 'url(/assets/bg-header.png)' }}>
                    <h3 className="text-3xl font-semibold text-white pt-16">{res?.name ? res?.name : "Mona Lisa"}</h3>
                    <h5 className="text-md font-normal text-white pb-20 mb-12 border-b border-gray-500">Painting by <span className='text-primary'>{res?.artistName ? res?.artistName : "Leonardo da Vinci"}</span></h5>
                    <h5 className="text-md font-light text-white">Price</h5>
                    <h3 className="text-3xl font-semibold text-primary pb-20 mb-12 border-b border-gray-500">{res?.nftPrice ? '$' + res?.nftPrice : "$10,000"}</h3>
                    <h3 className="text-3xl font-semibold text-white">Description</h3>
                    <p className="mt-4 text-lg text-gray-300 pb-20 mb-12 border-b border-gray-500">
                        {res?.description ? res?.description :
                            " Leonardo was born an illegitimate son of a Florentine noble and peasant woman; he grew up in Vinci, Italy. In his formative years, he developed a love of nature and from an early age began to display his remarkable academic and artistic talents."
                        }
                    </p>
                    <div className="flex items-center gap-3 md:gap-6">
                        <PlaceBidModal data={res} isOpen={isPlaceBidModalOpen} setIsOpen={setIsPlaceBidModalOpen} />
                        {account ?
                            <>
                                {show ?
                                    <button onClick={() => setIsPlaceBidModalOpen(!isPlaceBidModalOpen)} className="white-shadow text-12 md:text-16 bg-white transition-all hover:bg-gray-900 hover:text-white rounded-8 py-8 px-16 md:px-26 mt-24">Place Bid</button> :
                                    <button className="white-shadow text-12 md:text-16 bg-white transition-all hover:bg-gray-900 hover:text-white rounded-8 py-8 px-16 md:px-26 mt-24">{value}</button>
                                }
                            </>
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