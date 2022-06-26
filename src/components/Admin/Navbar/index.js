import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import WalletModel from '../../../components/common/WalletModel'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { account } = useWeb3React();

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <WalletModel open={open} handleClose={handleClose} />
            <nav className="sticky top-0 bg-white shadow-xl z-50 py-18">
                <section className='w-full px-24 flex items-center justify-between'>
                    <Link to="/admin/dashboard">
                        <span className="logo text-xl text-black-500 font-semibold whitespace-nowrap flex items-center gap-2">
                            <img className="w-36" src="/assets/image/beglobal.svg" alt="" />
                            Admin Art Marketplace
                        </span>
                    </Link>
                    {account ?
                        <>
                            <button className="bg-black text-white px-32 py-8 rounded-5 transition-all hover:bg-black relative top-0 hover:top-px" >{account?.slice(0, 6)}...</button>
                            {/* <button className="bg-black text-white px-32 py-8 rounded-5 transition-all hover:bg-black relative top-0 hover:top-px" >{account?.slice(0, 6)}...</button> */}
                        </>
                        : <button onClick={() => setOpen(true)} className="bg-black text-white px-32 py-8 rounded-5 transition-all hover:bg-black relative top-0 hover:top-px" >Connect</button>
                    }
                </section>
            </nav>
        </>
    )
}

export default Navbar;