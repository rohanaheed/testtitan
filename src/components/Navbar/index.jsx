import { useState } from 'react';
import {Link} from 'react-scroll'
import Modal from '../common/Modal'
import Input from '../common/Input'
import { IoClose } from "react-icons/io5";
import { BsCartFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const [open, setOpen] = useState(false)

    return (
        <nav
            className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        >
            
            <Modal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen}>
                <FaUserCircle className="text-gray-800 text-100 mx-auto mt-20" />
                <h2 className="text-center text-20 text-gray-800 mt-24"> SignIn to my user account </h2>
                <div className="w-full lg:w-2/3 mx-auto mt-20">
                    <Input className="mb-14" placeholder="Username or Email Address" />
                    <Input className="mb-28" placeholder="Password" />
                    <button className="bg-gray-800 text-white w-full h-38 rounded-8 mb-8">SignIn</button>
                    <p className="text-gray-600 text-center cursor-pointer"> forgot password? </p>
                </div>

                <div className="bg-gray-900 py-32 px-28 mt-38">
                    <p className="text-gray-200 font-light text-center"> Don't have an account? </p>
                    <p className="text-gray-200 font-medium text-center cursor-pointer"> Register </p>
                </div>
            </Modal>

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
                            <a
                                className="lg:text-white cursor-pointer lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            >
                                Music creations</a
                            >
                        </li>
                    </ul>
                    <div className="flex items-center gap-5">
                        <FaUserCircle onClick={() => setIsAuthModalOpen(!isAuthModalOpen)} className="cursor-pointer transition-all text-white hover:text-gray-300 text-28" />
                        <BsCartFill className="cursor-pointer transition-all text-white hover:text-gray-300 text-28" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;