import { Link } from 'react-router-dom';
import { BsInfoCircle } from "react-icons/bs";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    const history = useHistory();
    return (
        <>
            <section className="relative">
                <header className="container mx-auto px-24 lg:px-99 py-99">
                    <section className="flex flex-col xl:flex-row items-center gap-6">
                        <div className="w-full mb-32 xl:mb-10">
                            <h3 className="text-50 font-semibold mb-10 text-white leading-58">Discover, collect, and sell extraordinary NFTs</h3>
                            <p className="mt-4 text-34 text-gray-200 leading-48 pr-0 lg:pr-112">Titan is the world's first and largest NFT marketplace</p>
                            <div className="flex items-center gap-4 mt-38">
                                <button className="bg-red-500 text-white px-32 py-10 rounded-5 transition-all hover:bg-red-600 relative top-0 hover:top-px" onClick={() => history.push('/explore')}>Discover now</button>
                                {/* <Link to="/create">  <button className="border border-red-600 rounded-5 text-red-500 px-32 py-10 transition-all relative top-0 hover:top-px">
                                    Learn more
                                </button> </Link> */}
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 xl:w-full">
                            <Link to="/nft">
                                <div className="relative my-18 px-14 w-full lg:my-12 lg:px-14">
                                    <article className="showcase-header cursor-pointer overflow-hidden rounded-lg shadow-lg">
                                        <section className="relative">
                                            <img alt="Placeholder" className="block h-384 object-cover object-center w-full" src="assets/image/nft.jpg" />
                                        </section>
                                        <footer className='bg-black flex items-center justify-between py-22 px-12'>
                                            <section className='flex items-center gap-4'>
                                                <div className=" h-64 w-64 rounded-full  border-4 border-gray-400">
                                                    <img alt="Placeholder" className="h-full rounded-full w-full overflow-hidden" src="https://openseauserdata.com/files/otherside_launch_creator_image_rc1.jpeg" />
                                                </div>
                                                <div className='bg-black'>
                                                    <h6 className="mt-4 text-md leading-relaxed text-white cursor-pointer font-bold"> Billionaireclub_LLC  </h6>
                                                    <p className="text-14 leading-relaxed text-red-600 font-medium pl-4 mb-6 cursor-pointer transition-all hover:underline"> moondust</p>
                                                </div>
                                            </section>
                                            <BsInfoCircle className='mr-4 text-22 text-white cursor-pointer' />
                                        </footer>
                                    </article>
                                </div>
                            </Link>
                        </div>
                    </section>
                </header>
            </section>
        </>
    )
}

export default Header;