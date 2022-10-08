import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiLogout } from "react-icons/hi";
import WalletModel from '../../../components/common/WalletModel'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Navbar = () => {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const { account, deactivate } = useWeb3React();
    const Navigation = [{ placeholder: 'NFTs', path: '/admin/nfts' }, { placeholder: 'Events', path: '/admin/events' }]
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleDisconnect = async () => {
        try {
            await deactivate()
            localStorage.removeItem('UserAddress');
            localStorage.removeItem('type');
            localStorage.removeItem('admin')
        } catch (ex) {
            console.log(ex)
        }
    }
    return (
        <>
            <WalletModel open={open} handleClose={handleClose} admin="admin" />
            <nav className="sticky top-0 bg-white shadow-xl  py-18">
                <section className='w-full px-24 flex items-center justify-between'>
                    <Link to="/admin/dashboard">
                        <span className="logo text-xl text-black-500 font-semibold whitespace-nowrap flex items-center gap-2">
                            <img className="w-36" src="/assets/image/beglobal.svg" alt="" />
                            Admin Art Marketplace
                        </span>
                    </Link>
                    <div>
                        {
                            Navigation?.map(item => (
                                <span onClick={() => history.push(item?.path)} className={`relative text-xl border-b-2 border-transparent cursor-pointer transition-all ${item?.path === history.location.pathname ? 'text-black' : 'text-gray-500'} hover:text-black-600 mr-20`}>
                                    {item?.placeholder}
                                </span>
                            ))
                        }
                    </div>
                    {account && localStorage?.getItem('admin') ?
                        <div>
                            <button
                                className="connect-btn bg-black mr-5 text-white px-32 py-8 rounded-5 transition-all hover:bg-black relative top-0 hover:top-px"
                                onClick={() => handleLogout()}> Sign out </button>
                            <button className="bg-black text-white px-32 mr-5 py-8 rounded-5 transition-all hover:bg-black relative top-0 hover:top-px" >{account?.slice(0, 6)}...</button>
                            <button onClick={() => handleDisconnect()} className="connect-btn bg-black text-white px-32 py-8 rounded-5 transition-all hover:bg-black relative top-0 hover:top-px" >Disconnect</button>
                        </div>
                        :
                        <div>
                            <button
                                className="connect-btn bg-black mr-5 text-white px-32 py-8 rounded-5 transition-all hover:bg-black relative top-0 hover:top-px"
                                onClick={() => handleLogout()}> Sign out </button>
                            <button onClick={() => setOpen(true)} className="connect-btn bg-black text-white px-32 py-8 rounded-5 transition-all hover:bg-black relative top-0 hover:top-px" >Connect</button>
                        </div>
                    }
                    <div className="humburger-menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Navbar;