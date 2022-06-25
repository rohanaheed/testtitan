
import {Link} from 'react-scroll'

const Header = () => {

    return (
        <main>
            <div
                className="relative pt-16 flex content-center items-center justify-center"
                style={{ minHeight: '70vh' }}
            >
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: 'url("/assets/bg.jpg")' }}
                >

                </div>
                <div className="container relative mx-auto px-24">
                    <div className='items-center flex flex-wrap'>
                        <div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
                            <h3 className="text-3xl font-semibold text-white">NFT Market Place</h3>
                            <p className="mt-4 text-lg text-gray-200">
                                An exquisite out of the world grandeur NFT marketplace for Fine Arts. Bringing to you fine art curated by a team of elite curators.
                            </p>
                            <Link to="who-we-are" spy={true} smooth={true}> <button className="white-shadow py-8 mt-18 rounded-5 bg-white transition-all hover:bg-gray-900 hover:text-white px-26 header-btn">Discover</button> </Link>
                        </div>
                        <div className='w-full md:w-4/12 ml-auto mr-auto px-4'>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Header;