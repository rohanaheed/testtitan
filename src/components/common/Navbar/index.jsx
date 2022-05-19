import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import AuthModal from '../../AuthModal'
import ContactModal from '../../ContactModal'
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
            className="bg-black top-0 relative h-76 z-20 w-full flex flex-wrap items-center justify-between px-2 py-0 navbar-expand-lg"
        >

            <div
                className="container px-24 mx-auto flex flex-wrap items-center justify-between"
            >
                <div
                    className="flex lg:hidden w-full relative justify-between lg:w-auto lg:static lg:justify-start"
                >
                    <button
                        className="cursor-pointer text-white text-xl leading-none px-3 py-12 border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none"
                        type="button"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <IoClose /> : <GiHamburgerMenu />}
                    </button>
                    <div className="flex items-center gap-5">
                        <FaUserCircle onClick={() => setIsAuthModalOpen(!isAuthModalOpen)} className="cursor-pointer transition-all text-white hover:text-gray-300 text-28" />
                        <AuthModal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} />
                        <BsCartFill className="cursor-pointer transition-all text-white hover:text-gray-300 text-28" />
                    </div>
                </div>
                <div
                    className={`${open ? 'flex' : 'hidden'} lg:flex flex-grow items-center justify-between bg-white py-16 px-18 lg:p12 lg:bg-transparent lg:shadow-none`}
                >
                    <section className="flex items-center gap-16">
                        <Link to="/"> <h4 className="cursor-pointer text-26 font-medium text-white mb-4 logo">art gallery</h4>  </Link>
                        <ul className="links-container flex flex-col lg:flex-row list-none mr-auto lg:mr-0 gap-2 lg:gap-6">
                            <li className="flex items-center">

                                <div className="dropdown inline-block relative">
                                    <span
                                        className="lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                    >
                                        Discover
                                    </span>
                                    <ul className="dropdown-menu absolute hidden pb-14 px-26 z-10">
                                        <div className='bg-black h-28'></div>
                                        <ScrollLink to="masters-art" spy={true} smooth={true}>
                                            <li ><span className="py-6 inline-block px-6 whitespace-nowrap text-gray-200 hover:text-primary cursor-pointer font-light">Master arts</span></li>
                                        </ScrollLink>
                                        <ScrollLink to="contemporary-art" spy={true} smooth={true}>
                                            <li ><span className="py-6 inline-block px-6 whitespace-nowrap text-gray-200 hover:text-primary cursor-pointer font-light">Contemporary</span></li>
                                        </ScrollLink>
                                        <li ><span className="py-6 inline-block px-6 whitespace-nowrap text-gray-200 hover:text-primary cursor-pointer font-light">Antiques</span></li>
                                        <ScrollLink to="precious-art" spy={true} smooth={true}>
                                            <li ><span className="py-6 inline-block px-6 whitespace-nowrap text-gray-200 hover:text-primary cursor-pointer font-light">Precious gems</span></li>
                                        </ScrollLink>
                                        <li ><span className="py-6 inline-block px-6 whitespace-nowrap text-gray-200 hover:text-primary cursor-pointer font-light">Music pieces</span></li>
                                    </ul>
                                </div>

                            </li>
                            <li className="flex items-center">
                                <div className="dropdown inline-block relative">
                                    <span
                                        className="lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                    >
                                        Artists
                                    </span>
                                    <ul className="dropdown-menu absolute hidden px-26 pb-18 z-10">
                                        <div className='bg-black h-28'></div>
                                        <Link to="/artist"> <li ><span className="py-6 inline-block px-6 hover:text-primary whitespace-nowrap text-gray-200 cursor-pointer font-light">Alex Reinhart</span></li> </Link>
                                        <Link to="/artist"> <li ><span className="py-6 inline-block px-6 hover:text-primary whitespace-nowrap text-gray-200 cursor-pointer font-light">Anne Lefève</span></li> </Link>
                                        <Link to="/artist"> <li ><span className="py-6 inline-block px-6 hover:text-primary whitespace-nowrap text-gray-200 cursor-pointer font-light">Chris Nash</span></li> </Link>
                                        <Link to="/artist"> <li ><span className="py-6 inline-block px-6 hover:text-primary whitespace-nowrap text-gray-200 cursor-pointer font-light">Lucy Esteban</span></li> </Link>
                                        <Link to="/artist"> <li ><span className="py-6 inline-block px-6 hover:text-primary whitespace-nowrap text-gray-200 cursor-pointer font-light">Pablo Alvez</span></li> </Link>
                                    </ul>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <div className="dropdown inline-block relative">
                                    <span
                                        className="lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                    >
                                        Collections
                                    </span>
                                    <ul className="dropdown-menu absolute hidden px-26 pb-18 z-10">
                                        <div className='bg-black h-28'></div>
                                        <li ><span className="py-6 inline-block px-6 whitespace-nowrap hover:text-primary text-gray-200 cursor-pointer font-light">Art movements</span></li>
                                        <li ><span className="py-6 inline-block px-6 whitespace-nowrap hover:text-primary text-gray-200 cursor-pointer font-light">Colors</span></li>
                                        <li ><span className="py-6 inline-block px-6 whitespace-nowrap hover:text-primary text-gray-200 cursor-pointer font-light">Curator's pick</span></li>
                                        <li ><span className="py-6 inline-block px-6 whitespace-nowrap hover:text-primary text-gray-200 cursor-pointer font-light">Antiques</span></li>
                                        <li ><span className="py-6 inline-block px-6 whitespace-nowrap hover:text-primary text-gray-200 cursor-pointer font-light">Mood</span></li>
                                        <div className='dropdown-img-container'>
                                            <div className='bg-black h-28'></div>
                                            <div className='dropdown-img'>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <span
                                    className="lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                >
                                    NFT Project</span
                                >
                            </li>
                            <li className="flex items-center">
                                <span
                                    className="lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                >
                                    About</span
                                >
                            </li>
                            <li className="flex items-center">
                                <span onClick={() => setIsContactModalOpen(!isContactModalOpen)}
                                    className="lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                >
                                    Contact</span
                                >
                                <ContactModal isOpen={isContactModalOpen} setIsOpen={setIsContactModalOpen} />
                            </li>
                        </ul>
                    </section>
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