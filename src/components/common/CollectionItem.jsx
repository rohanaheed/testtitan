import { useState } from "react";
import { GoVerified } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdModeEditOutline, MdSell, MdSend } from "react-icons/md";
import { Link } from 'react-router-dom';

const CollectionItem = ({ slider, item }) => {

    const [toggle, setToggle] = useState(false)
    console.log(item)

    return (
        <>
            {item?.image &&
                <div className={`my-18 px-14  lg:my-12 lg:px-14 cursor-pointer ${slider ? 'w-full' : 'w-full md:w-1/2 lg:w-1/3'}`}>
                    <article className="overflow-hidden rounded-lg shadow-lg custom-shadow">
                        <section className="relative0">
                            {/* <img alt="Placeholder" className="block h-auto w-full" src={item?.image ? 'assets/image/nft.jpg' : "assets/image/nft.jpg"} /> */}
                            <div className="img-container">
                                <a href="#">
                                    <img alt="Placeholder" className="block h-auto w-full" src={item?.image ? item?.image : "https://picsum.photos/600/400/?random"} />
                                </a>
                            </div>
                        </section>

                        <footer className='text-center bg-black w-full py-14 px-12'>
                            <Link className="w-full" to="/single_nft">

                                <div className="flex items-center justify-between gap-2 mt-4 mb-8">
                                    <h6 className="flex items-center gap-2 justify-center text-md leading-relaxed text-gray-200 cursor-pointer font-medium transition-all hover:text-gray-900"> {item?.name ? item?.name : 'Billionaireclub_LLC'} <GoVerified className="text-blue-500 text-16" /> </h6>
                                    <span className="text-14 text-gray-300">Top Bid</span>
                                </div>
                                <div className="flex items-center justify-between gap-2 mt-4 mb-8">
                                    <h6 className="flex items-center gap-2 justify-center text-sm leading-relaxed text-gray-200 cursor-pointer font-medium transition-all hover:text-gray-300"> 58192 </h6>
                                    <span className="text-14 text-gray-200 font-bold flex items-center gap-2">
                                        <img className="w-10" src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="" />
                                        5.5</span>
                                </div>
                                <div className="flex justify-end mb-14">
                                    <span className="text-14 text-gray-200 font-bold flex items-center gap-2">
                                        <span className="text-gray-200 font-light text-12">Offers for: </span>
                                        <img className="w-10" src="https://openseauserdata.com/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="" />
                                        5.5</span>
                                </div>
                            </Link>
                            <section className="flex items-center justify-between gap-2 mb-8 border-t pt-16 mt-12 relative">
                                <div className={`absolute bg-gray-50 z-50 -top-28 border rounded-5 ${toggle ? 'block' : 'hidden'}`}>
                                    <ul>
                                        <div className={`flex custom-shadow pl-14 pr-18 py-8 border-b border-gray-400 text-gray-700 items-center gap-3 font-normal text-md cursor-pointer transition-all`}>
                                            <MdSell />
                                            Sell
                                        </div>
                                        <Link to="/transfer_nft">
                                            <div className={`flex custom-shadow pl-14 pr-18 py-8 border-b border-gray-400 text-gray-700 items-center gap-3 font-normal text-md cursor-pointer transition-all`}>
                                                <MdSend />
                                                Transfer
                                            </div>
                                        </Link>
                                        <div className={`flex custom-shadow pl-14 pr-18 py-8 border-b border-gray-400 text-gray-700 items-center gap-3 font-normal text-md cursor-pointer transition-all`}>
                                            <MdModeEditOutline size="19" />
                                            Edit
                                        </div>

                                    </ul>
                                </div>
                                <h6 onClick={() => setToggle(!toggle)} className="flex items-center gap-2 justify-center mt-4 text-md leading-relaxed text-gray-300 cursor-pointer font-medium transition-all hover:text-gray-200">
                                    {item?.artistName}
                                    <BsThreeDots />
                                </h6>
                                {/* <span className="text-14 text-gray-200 flex items-center gap-2"> <AiOutlineHeart className="transition-all cursor-pointer hover:text-red-600" size="22" /> 14</span> */}
                            </section>
                        </footer>
                    </article>
                </div>
            }
        </>
    )
}

export default CollectionItem;