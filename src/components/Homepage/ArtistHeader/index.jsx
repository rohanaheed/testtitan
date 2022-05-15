import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Header = () => {

    return (
        <main className="bg-gray-900 mb-99 h-header">
                    <div className='flex flex-col h-header lg:flex-row items-center'>
                    <div className='w-full h-header bg-red-500 bg-cover bg-top bg-no-repeat' style={{backgroundImage: 'url(/assets/bg-artist.jpg)'}}>
                    </div>
                        <div className='w-full ml-auto mr-auto h-header flex flex-col justify-center px-99 py-99' style={{backgroundImage: 'url(/assets/bg-header.png)'}}>
                            <h3 className="text-3xl font-semibold text-white">THREE MUSKETEERS</h3>
                            <h5 className="text-md font-normal text-white pb-20 mb-12 border-b border-gray-500">Sydney NSW, Australia</h5>
                            <h3 className="text-3xl font-semibold text-white">Biography</h3>
                            <p className="mt-4 text-lg text-gray-300 pb-20 mb-12 border-b border-gray-500">
                            Leonardo was born an illegitimate son of a Florentine noble and peasant woman; he grew up in Vinci, Italy. In his formative years, he developed a love of nature and from an early age began to display his remarkable academic and artistic talents. He also pioneered the use of Chiaroscuro; this is the technique of defining forms through the contrast of light and shadow.                            </p>
                            <section className="flex items-center justify-end gap-10 mt-28">
                                <h5 className="text-md font-normal text-white">Follow Us :</h5>
                                <div className="flex items-center gap-3 text-22 text-white">
                                    <FaFacebookF className="cursor-pointer transition-all hover:text-gray-300" />
                                    <AiFillInstagram className="cursor-pointer text-26 mr-2 transition-all hover:text-gray-300" />
                                    <FaTwitter className="cursor-pointer transition-all hover:text-gray-300" />
                                </div>
                            </section>
                        </div>
                    </div>
        </main>
    )
}

export default Header;