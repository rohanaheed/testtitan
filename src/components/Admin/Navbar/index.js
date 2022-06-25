import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <nav className="sticky top-0 bg-white shadow-xl z-50 py-18">
                    <section className='w-full px-24 flex items-center justify-between'>
                        <Link to="/admin/dashboard">
                            <span className="logo text-xl text-black-500 font-semibold whitespace-nowrap flex items-center gap-2">
                                <img className="w-36" src="/assets/image/beglobal.svg" alt="" />
                                Admin Art Marketplace
                            </span>
                        </Link>
                        <button className="bg-black text-white px-32 py-8 rounded-5 transition-all hover:bg-black relative top-0 hover:top-px" >Connect</button>
                </section>
            </nav>
        </>
    )
}

export default Navbar;