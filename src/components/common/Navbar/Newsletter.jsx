import { useState } from "react";
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaDiscord, FaRedditAlien, FaTiktok } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { API_URL } from "../../../utils/contant";
import isEmpty from "../../../utils/isEmpty";
import validateEmail from "../../../utils/validate";
import Input from "../Input";
import axios from 'axios';
import AuthModal from "../../AuthModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Newsletter = () => {
    const history = useHistory()
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const communitylinks = [{
        'link': 'https://twitter.com/',
        'icon': <BsTwitter />
    },
    {
        'link': 'https://www.instagram.com/',
        'icon': <BsInstagram />
    },
    {
        'link': 'https://medium.com/',
        'icon': <FaDiscord />
    },
    // {
    //     'link': 'https://twitter.com/',
    //     'icon': <FaRedditAlien />
    // },
    {
        'link': 'https://www.youtube.com/',
        'icon': <BsYoutube />
    },
    {
        'link': 'https://www.tiktok.com/login',
        'icon': <FaTiktok />
    },
    {
        'link': 'https://mail.google.com/',
        'icon': <IoMail />
    }]
    const [formData, setFormData] = useState({
        email: '',
    });
    const { email } = formData;
    const [errors, setErrors] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors('');
    };

    const validate = () => {
        const _errors = {};
        if (isEmpty(email)) {
            _errors.email = 'Please enter email address.';
        }
        else if (!validateEmail(email)) {
            _errors.email = 'It must be a valid email.';
        }
        return _errors;
    }

    const _submit = () => {
        const errors = validate();
        if (isEmpty(errors)) {
            setIsAuthModalOpen(true)
        }
        setErrors(errors || {});
    }
    return (

        <footer className="bg-black w-full mb-90">
            <section className="bg-secondary">
                <section className="mt-20 mx-auto px-24 bg-black lg:px-99  xl:pb-0">
                    <section className="w-full flex flex-col xl:flex-row gap-5 xl:gap-24 ">
                        <section className="w-full text-center xl:text-left mb-44">
                            <h4 className="font-semibold text-white text-24 mb-8 mt-50">Stay in the loop</h4>
                            <p className="text-16 text-gray-300 mb-28">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Titan.</p>
                            {errors.email && <p className="text-red-700 text-10 mt-4 ml-2 mb-5"> {errors.email} </p>}
                            <div className="w-full flex items-center gap-3">

                                <Input
                                    placeholder='Your email address'
                                    name="email"
                                    type={'email'}
                                    value={email}
                                    className='input-border'
                                    handleChange={handleChange}
                                // errorMessage={errors.email}
                                />
                                <button onClick={() => _submit()} className="bg-red-500 flex-shrink-0 text-white px-32 py-10 font-semibold rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Sign up</button>
                            </div>
                        </section>

                        <section className="w-full text-center xl:text-left">
                            <h4 className="font-semibold text-white text-24 mb-8 mt-50">Join the community</h4>
                            <p className="text-16 text-gray-300 mb-28">Join our social media handles to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Titan.</p>
                            <section style={{ zIndex: '999' }} className="flex items-start justify-center xl:justify-start gap-3 flex-wrap">
                                {
                                    communitylinks?.map(link => (
                                        <div style={{ zIndex: '0' }} onClick={() => window.open(link?.link)} className="grid place-content-center cursor-pointer bg-gray-600 transition-all hover:bg-gray-900 hover:text-red-500 text-24 w-48 h-48 rounded-5">
                                            {link?.icon}
                                        </div>
                                    ))
                                }

                            </section>
                        </section>
                    </section>
                </section>
            </section>
            {/* <section className="h-320 mt-42"></section> */}
            <section className="py-18 text-gray-400 text-center text-sm">
            </section>

            <section className="container mx-auto px-24 lg:px-99 py-60">

                <div className="md:flex w-full md:justify-between border-b pb-42 border-gray-500">
                    <div className="md:mb-0 w-auto mb-24">
                        {/* <Link to="/"> */}
                        <h6 className="text-2xl logo font-semibold text-white mb-2 flex items-center gap-2">
                            TITAN</h6>
                        {/* </Link> */}
                        <br />
                        <span className="text-gray-300 w-2/6">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                        </span>
                    </div>
                    <div className="w-full"></div>
                    <div className="grid w-full grid-cols-2 gap-10 sm:gap-6 sm:grid-cols-3">
                        <div className="mb-24">
                            <h2 className="text-sm font-semibold text-gray-200 uppercase dark:text-white mb-8">Marketplace</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li>
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Collectibles</span>
                                </li>
                                <li>
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Domain Names</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <AuthModal email={email} name={'SignUp'} isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} />
        </footer>
    )
}

export default Newsletter;