import { Link } from 'react-router-dom'

const BusinessDetail = () => {

    return (
        <>
            <section id="masters-art" className="relative py-20 bg-black">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{ height: '80px', transform: 'translateZ(0px)' }}
                >
                </div>
                <div className="container mx-auto px-24">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                            <div className="md:pr-12">
                                <div
                                    className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-primary"
                                >
                                    <i className="fas fa-rocket text-xl"></i>
                                </div>
                                <h3 className="text-3xl font-semibold text-white">Fine Arts</h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-300">
                                    The most renowned oil paintings in the world all under one roof. These works of art have transcended time and aesthetic ideas to make history and are timeless in their beauty and execution. These works of art are timeless classics that are well-known to individuals of all ages and backgrounds. For many decades to come, they will continue to occupy the thoughts of art enthusiasts as the finest pieces of art ever produced by the great Masters.
                                </p>
                                <Link to="/explore"> <button className='link-btn my-8 text-lg leading-relaxed text-gray-100 transition-all hover:text-primary'>Discover</button> </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                            <img
                                alt="..."
                                className="max-w-full rounded-lg shadow-lg"
                                src="/assets/art.jpeg"
                            />
                        </div>
                    </div>
                </div>
                {/* <img className='w-205 absolute -bottom-28 -right-20 z-10 hidden lg:block' src="/assets/arrow-graphic.png" alt="" /> */}
            </section>

            <section id="contemporary-art" className="relative py-20 bg-gray-50">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{ height: '80px', transform: 'translateZ(0px)' }}
                >
                </div>
                <div className="container mx-auto px-24">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                            <img
                                alt="..."
                                className="max-w-full rounded-lg shadow-lg"
                                src="/assets/contemporary.jpeg"
                            />
                        </div>
                        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                            <div className="md:pr-12">
                                <div
                                    className="text-primary p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-primary"
                                >
                                    <i className="fas fa-rocket text-xl"></i>
                                </div>
                                <h3 className="text-3xl font-semibold">Contemporary Arts</h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    From the classics of renowned artists of the late 20th and early 21st centuries, to the work of up-and-coming artists, these are works that every art enthusiast should be aware of.Feast your eyes on a wealth of sculptures and paintings filled with splendours of colours. These are contemporary art pieces that shape our diverse, global, and rapidly changing world

                                </p>
                                <Link to="/explore"> <button className='link-btn my-8 text-lg leading-relaxed text-gray-600 transition-all hover:text-primary'>Discover</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img className='w-205 absolute -bottom-28 -right-20 z-10 hidden lg:block' src="/assets/arrow-graphic.png" alt="" /> */}
            </section>


            <section id="precious-art" className="relative py-20">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{ height: '80px', transform: 'translateZ(0px)' }}
                >
                </div>
                <div className="container mx-auto px-24">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                            <div className="md:pr-12">
                                <div
                                    className="text-primary p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-primary"
                                >
                                    <i className="fas fa-rocket text-xl"></i>
                                </div>
                                <h3 className="text-3xl font-semibold">Precious Antiques</h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                Lay your hands on nearly 1,000 works that span continents and epochs. Every artwork has a lovely history and great historical importance and is handpicked by our master curators. Your interest will be captured and held by these priceless and complex features as well as the careful presentation of these antiques.</p>
                                <Link to="/explore"> <button className='link-btn my-8 text-lg leading-relaxed text-gray-600 transition-all hover:text-primary'>Discover</button> </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                            <img
                                alt="..."
                                className="max-w-full rounded-lg shadow-lg"
                                src="/assets/precious.jpeg"
                            />
                        </div>
                    </div>
                </div>
                {/* <img className='w-205 absolute -bottom-28 -right-20 z-10 hidden lg:block' src="/assets/arrow-graphic.png" alt="" /> */}
            </section>
        </>

    )
}

export default BusinessDetail;