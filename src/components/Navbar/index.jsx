import { useState } from 'react';
import {Link} from 'react-scroll'
import AuthModal from '../AuthModal'
import ContactModal from '../ContactModal'
import { IoClose } from "react-icons/io5";
import { BsCartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const [open, setOpen] = useState(false)

    return (
        <nav
            className="bg-black top-0 sticky z-10 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        >
        
            <div
                className="container px-4 mx-auto flex flex-wrap items-center justify-between"
            >
                <div
                    className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
                >
                    <button
                        className="cursor-pointer text-white text-xl ml-12 leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <IoClose /> : <GiHamburgerMenu />}
                    </button>
                </div>
                <div
                    className={`${open ? 'flex' : 'hidden'} lg:flex flex-grow items-center justify-between bg-white py-22 px-18 lg:p12 lg:bg-transparent lg:shadow-none`}
                >
                    <h4 className="cursor-pointer font-medium text-white">Art gallery</h4>  
                    <ul className="flex flex-col lg:flex-row list-none mr-auto lg:mr-0 gap-2 lg:gap-6">
                        <li className="flex items-center">
                            <span
                                className="lg:text-white cursor-pointer lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            >
                                <Link to="masters-art" spy={true} smooth={true}>
                                    Masters Arts
                                </Link>
                                    </span>
                        </li>
                        <li className="flex items-center">
                            <span
                                className="lg:text-white cursor-pointer lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            >
                             <Link to="contemporary-art" spy={true} smooth={true}>
                                Contemporary Arts
                             </Link>
                                </span
                            >
                        </li>
                        <li className="flex items-center">
                            <span
                                className="lg:text-white cursor-pointer lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            >
                             <Link to="precious-art" spy={true} smooth={true}>
                                Precious Antiques
                                </Link></span
                            >
                        </li>
                        <li className="flex items-center">
                            <a
                                className="lg:text-white cursor-pointer lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            >
                                Precious Gems</a
                            >
                        </li>
                        <li className="flex items-center">
                            <a onClick={() => setIsContactModalOpen(!isContactModalOpen)}
                                className="lg:text-white cursor-pointer lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            >
                                Contact</a
                            >
                            <ContactModal isOpen={isContactModalOpen} setIsOpen={setIsContactModalOpen} />
                        </li>
                    </ul>
                    <div className="flex items-center gap-5">
                        <FaUserCircle onClick={() => setIsAuthModalOpen(!isAuthModalOpen)} className="cursor-pointer transition-all text-white hover:text-gray-300 text-28" />
                            <AuthModal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} />
                        <BsCartFill className="cursor-pointer transition-all text-white hover:text-gray-300 text-28" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;