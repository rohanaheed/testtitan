
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
                                    className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                                >
                                    <i className="fas fa-rocket text-xl"></i>
                                </div>
                                <h3 className="text-3xl font-semibold text-white">Masters Arts</h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, id tenetur odio nihil quae eveniet consequatur eaque, itaque qui tempora. Ad dolorem nam fugit ea non, facere amet totam dolores eius.
                                </p>
                                <button className='my-24 text-lg leading-relaxed text-gray-100 transition-all hover:text-gray-500'>Discover</button>
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
                <img className='w-205 absolute -bottom-28 -right-20 z-10 hidden lg:block' src="/assets/arrow-graphic.png" alt="" />
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
                                    className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                                >
                                    <i className="fas fa-rocket text-xl"></i>
                                </div>
                                <h3 className="text-3xl font-semibold">Contemporary Arts</h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, id tenetur odio nihil quae eveniet consequatur eaque, itaque qui tempora. Ad dolorem nam fugit ea non, facere amet totam dolores eius.
                                </p>
                                <button className='my-24 text-lg leading-relaxed text-gray-600 transition-all hover:text-gray-800'>Discover</button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='w-205 absolute -bottom-28 -right-20 z-10 hidden lg:block' src="/assets/arrow-graphic.png" alt="" />
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
                                    className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                                >
                                    <i className="fas fa-rocket text-xl"></i>
                                </div>
                                <h3 className="text-3xl font-semibold">Precious Antiques</h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, id tenetur odio nihil quae eveniet consequatur eaque, itaque qui tempora. Ad dolorem nam fugit ea non, facere amet totam dolores eius.
                                </p>
                                <button className='my-24 text-lg leading-relaxed text-gray-600 transition-all hover:text-gray-800'>Discover</button>
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
                <img className='w-205 absolute -bottom-28 -right-20 z-10 hidden lg:block' src="/assets/arrow-graphic.png" alt="" />
            </section>
        </>

    )
}

export default BusinessDetail;