import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import AuthModal from '../../AuthModal'
import ContactModal from '../../ContactModal'
import { IoClose } from "react-icons/io5";
import { BsCartFill, BsCart } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineAlignRight } from "react-icons/ai";
import { useWeb3React } from '@web3-react/core';
import ConnectionModel from '../ConnectionModel';
import isEmpty from '../../../utils/isEmpty';

const Navbar = () => {
    const isAth = JSON?.parse(localStorage.getItem('user_data'));
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const history = useHistory();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const artist = [
        { name: 'Yang Changtai', id: '1' },
        { name: 'Liang Zhenkang, Stephen', id: '2' },
        { name: 'Huang Jifa, Cephas', id: '3' },
        // { name: 'Tan Ruirong', id: '4' },
        // { name: 'Yang Changtai', id: '5' }
    ]

    const [open, setOpen] = useState(false)

    const { account, deactivate } = useWeb3React();
    {console.log(account)}

    const type = localStorage?.getItem('type')
    const [show, setShow] = useState(isEmpty(type) ? true : false);
    const logout = () => {
        localStorage.removeItem('type');
        localStorage.removeItem('user');
        deactivate();
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <nav
            className="bg-black top-0 sticky h-71 py-12 z-20 w-full flex flex-wrap items-center justify-between px-2 navbar-expand-lg"
        >

            <ConnectionModel popup={show} onClose={handleClose} />
            <div
                className="container px-24 mx-auto flex flex-wrap items-center justify-between"
            >
                <div
                    className="flex lg:hidden w-full justify-between lg:w-auto lg:static lg:justify-start"
                >
                    <Link to="/"> <h4 className="cursor-pointer text-26 font-medium text-white mb-4 logo block lg:hidden">  <img src='/assets/logo.png' width={"50px"} /></h4>  </Link>

                    <section className='flex items-center gap-2'>
                        <BiUserCircle onClick={() => setIsAuthModalOpen(!isAuthModalOpen)} className="cursor-pointer ml-2 transition-all text-white hover:text-gray-300 text-28" />
                        <AuthModal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} />
                        <BsCart className="cursor-pointer transition-all text-white hover:text-gray-300 text-24 ml-2" />
                        <button
                            className="cursor-pointer text-white text-xl leading-none border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none"
                            type="button"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <IoClose className='text-26' /> : <AiOutlineAlignRight className='text-25' />}
                        </button>
                    </section>
                </div>
                <div
                    className={`${open ? 'flex' : 'hidden'} absolute top-69 top-20 left-0 bg-gray-200 right-0 lg:relative lg:top-unset lg:flex flex-grow items-center justify-between px-18 lg:p12 lg:bg-transparent lg:shadow-none`}
                >
                    <section className="flex items-center gap-16">
                        <Link to="/">
                            <h4 className="whitespace-nowrap cursor-pointer text-26 font-medium text-white mb-4 logo hidden lg:block">
                                <img src='/assets/logo.png' width={"50px"} />
                            </h4>
                        </Link>
                        <ul className="links-container flex flex-col lg:flex-row list-none mr-auto lg:mr-0 gap-2 lg:gap-6">
                            <li className="flex items-center">

                                <div className="dropdown inline-block relative">
                                    <span
                                        className="whitespace-nowrap lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                        onClick={() => history.push('/explore')}
                                    >
                                        Discover
                                    </span>
                                    <ul className="dropdown-menu absolute hidden pb-14 px-26 z-10">
                                        <div className='bg-black h-28 hidden lg:block'></div>
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
                            <Link to="/events">
                                <li className="flex items-center">
                                    <span
                                        className="whitespace-nowrap lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                    >
                                        Events
                                    </span>
                                </li>
                            </Link>
                            <li className="flex items-center">
                                <div className="dropdown inline-block relative">
                                    <span
                                        className="whitespace-nowrap lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                    // onClick={() => history.push('/artist')}
                                    >
                                        Artists
                                    </span>
                                    <ul className="dropdown-menu absolute hidden px-26 pb-18 z-10">
                                        <div className='bg-black h-28  hidden lg:block'></div>
                                        {artist.map(item => (
                                            <Link to={`/artist?id=${item?.id}`}> <li ><span className="py-6 inline-block px-6 hover:text-primary whitespace-nowrap text-gray-200 cursor-pointer font-light">{item?.name}</span></li> </Link>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <div className="dropdown inline-block relative">
                                    <span
                                        className="whitespace-nowrap lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                    >
                                        Collections
                                    </span>
                                    <ul className="dropdown-menu absolute hidden px-26 pb-18 z-10">
                                        <div className='bg-black h-28 hidden lg:block'></div>
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
                                    className="whitespace-nowrap lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                >
                                    NFT Project
                                </span>
                            </li>
                            <Link to="/about-us">
                                <li className="flex items-center">
                                    <span
                                        className="whitespace-nowrap lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                    >
                                        About
                                    </span>
                                </li>
                            </Link>
                            <li className="flex items-center">
                                <span onClick={() => setIsContactModalOpen(!isContactModalOpen)}
                                    className="whitespace-nowrap lg:text-white cursor-pointer hover:text-primary text-gray-800 px-3 py-4 lg:py-2 flex items-center text-md"
                                >
                                    Contact
                                </span>
                                <ContactModal isOpen={isContactModalOpen} setIsOpen={setIsContactModalOpen} />
                            </li>
                        </ul>
                    </section>
                    <div className="items-center gap-5 hidden lg:flex">
                        {!isAth?.token ?
                            <>
                                <button
                                    onClick={() => !isAth?.token && setIsAuthModalOpen(!isAuthModalOpen)}
                                    className="white-shadow py-8 rounded-5 bg-white transition-all hover:bg-gray-900 hover:text-white px-26 header-btn">
                                    Login
                                </button>
                            </> :
                            <>
                                <button
                                    onClick={() => {localStorage.removeItem('user_data'); window.location.reload()}}
                                    className="white-shadow py-8 rounded-5 bg-white transition-all hover:bg-gray-900 hover:text-white px-26 header-btn">
                                    Logout
                                </button>
                                <FaUserCircle className="cursor-pointer transition-all text-white hover:text-gray-300 text-28" />
                            </>
                        }
                        <AuthModal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} />
                        <BsCartFill className="cursor-pointer transition-all text-white hover:text-gray-300 text-28" />
                        {console.log(account, localStorage?.getItem('user'))}
                        {account ?
                            <>
                                <button
                                    className="white-shadow py-8 rounded-5 bg-white transition-all hover:bg-gray-900 hover:text-white px-26 header-btn">
                                    {account.slice(0, 10) + '...'}
                                </button>
                                <button
                                    onClick={() => logout()}
                                    className="white-shadow py-8 rounded-5 bg-white transition-all hover:bg-gray-900 hover:text-white px-26 header-btn">
                                    Disconnect
                                </button>
                            </>
                            :
                            <button
                                onClick={() => setShow(true)}
                                className="whitespace-nowrap white-shadow py-8 rounded-5 bg-white transition-all hover:bg-gray-900 hover:text-white px-26 header-btn">
                                Connect wallet
                            </button>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;