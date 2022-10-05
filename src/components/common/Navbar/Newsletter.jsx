import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaDiscord, FaRedditAlien, FaTiktok } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Input from "../Input";


const Newsletter = () => {

    const communitylinks = [<BsTwitter />, <BsInstagram />, <FaDiscord />, <FaRedditAlien />, <BsYoutube />, <FaTiktok />, <IoMail />]

    return (

        <footer className="bg-black w-full mb-90">
            <section className="bg-secondary">
                <section className="mt-20 mx-auto px-24 bg-black lg:px-99  xl:pb-0">
                    <section className="w-full flex flex-col xl:flex-row gap-5 xl:gap-24 ">
                        <section className="w-full text-center xl:text-left mb-44">
                            <h4 className="font-semibold text-white text-24 mb-8 mt-50">Stay in the loop</h4>
                            <p className="text-16 text-gray-300 mb-28">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Titan.</p>
                            <div className="w-full flex items-center gap-3">
                                <Input className="w-full" placeholder="Your email address" />
                                <button className="bg-red-500 flex-shrink-0 text-white px-32 py-10 font-semibold rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" >Sign up</button>
                            </div>
                        </section>

                        <section className="w-full text-center xl:text-left">
                            <h4 className="font-semibold text-white text-24 mb-8 mt-50">Join the community</h4>
                            <p className="text-16 text-gray-300 mb-28">Join our social media handles to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Titan.</p>
                            <section className="flex items-start justify-center xl:justify-start gap-3 flex-wrap">
                                {
                                    communitylinks?.map(link => (
                                        <div className="grid place-content-center cursor-pointer bg-gray-600 transition-all hover:bg-gray-900 hover:text-red-500 text-24 w-48 h-48 rounded-5">
                                            {link}
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
                        <div className="mb-24">
                            <h2 className="text-sm font-semibold text-gray-200 uppercase dark:text-white mb-8">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li>
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Help Center</span>
                                </li>
                                <li>
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Platform Status</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-24">
                            <h2 className="text-sm font-semibold text-gray-200 uppercase dark:text-white mb-8">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li>
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Privacy Policy</span>
                                </li>
                                <li>
                                    <span className="text-gray-400 font-light transition-all hover:underline cursor-pointer">Terms &amp; Conditions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Newsletter;