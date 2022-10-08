import { Link } from 'react-router-dom';
import { HiLogout } from "react-icons/hi";
import { useState } from 'react';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const Navigation = [{ placeholder: 'NFTs', path: '/admin/nfts' }, { placeholder: 'Events', path: '/admin/events' }]
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return (
        <aside className='sidebar-open right-unset left-0 flex justify-between flex-col'
        >
            <ul className="flex pt-40 flex-col ml-20 mt-4 ">
                {
                    Navigation?.map(item => (
                        <li className='mb-12'>
                            <Link to={item?.path}>
                                <span className='relative text-xl border-b-2 border-transparent cursor-pointer transition-all text-gray-500 hover:text-black-600'>
                                    {item?.placeholder}
                                </span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <section className='gGngoX signout-actions'>
                <button onClick={() => setOpen(true)} className="side-connect-btn bg-black text-white px-32 py-10 mb-4 w-full rounded-5 transition-all hover:bg-black relative top-0 hover:top-px" >Connect</button>
                <button
                    className="bg-black text-white mt-100 px-32 mb-22 w-full py-10 rounded-5 transition-all flex items-center justify-center gap-3 hover:bg-black-600 relative top-0 hover:top-px"
                    onClick={() => handleLogout()}> Sign out  <HiLogout className='text-18' /></button>
            </section>
        </aside>
    )
}

export default Sidebar;