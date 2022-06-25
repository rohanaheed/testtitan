import {Link} from 'react-router-dom'

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
                                <h3 className="text-3xl font-semibold text-white">Masters Arts</h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-300">
                                    The worlds’ most famous oil paintings under one roof. Timeless in their beauty and execution, these artworks have transcended time and artistic concepts to create history. These paintings are all time classics and familiar to people across generations and cultures. They represent the greatest works of art ever created by the great Masters and will continue to stay in the minds of art lovers for many centuries to come.
                                </p>
                                <Link to="/explore"> <button className='link-btn my-8 text-lg leading-relaxed text-gray-100 transition-all hover:text-primary'>Discover</button> </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                            <img
                                alt="..."
                                className="max-w-full rounded-lg shadow-lg"
                                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
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
                                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
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
                                    These are artworks that every art lover should know about, from the masterpieces of iconic artists to rising talents. <br />
                                    Feast your eyes on a wealth of sculptures and paintings filled with splendours of colours.
                                    These are contemporary art pieces that shape our diverse, global, and rapidly changing world
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
                                    Lay your hands on nearly 1,000 works that span continents and epochs. These pieces were specially selected from thousands of other works. Behind every piece comes a beautiful story and a high historical value. These precious and intricate details together with the loving presentation of these antiques will capture and hold your attention.                                </p>
                               <Link to="/explore"> <button className='link-btn my-8 text-lg leading-relaxed text-gray-600 transition-all hover:text-primary'>Discover</button> </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                            <img
                                alt="..."
                                className="max-w-full rounded-lg shadow-lg"
                                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
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