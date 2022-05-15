import {Link} from 'react-router-dom'

const AboutArt = () => {

    return (
        <section className="relative mt-48 py-20">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{ height: '80px', transform: 'translateZ(0px)' }}
                >
                </div>
                <div className="container mx-auto px-24">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-5/12 ml-auto mr-auto px-4">
                            <div className="md:pr-12">
                            <div className="my-18"> 
                                <div
                                    className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                                >
                                    <i className="fas fa-rocket text-xl"></i>
                                </div>
                                <h3 className="text-3xl font-semibold">About this Art Piece</h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    Lay your hands on nearly 1,000 works that span continents and epochs. These pieces were specially selected from thousands of other works. Behind every piece comes a beautiful story and a high historical value. These precious and intricate details together with the loving presentation of these antiques will capture and hold your attention.                                </p>
                                </div>

                                <div className="my-18"> 
                                <div
                                    className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                                >
                                    <i className="fas fa-rocket text-xl"></i>
                                </div>
                                <h3 className="text-3xl font-semibold">About <span className="text-blue-600">THREE MUSKETEERS</span></h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    Lay your hands on nearly 1,000 works that span continents and epochs. These pieces were specially selected from thousands of other works. Behind every piece comes a beautiful story and a high historical value. These precious and intricate details together with the loving presentation of these antiques will capture and hold your attention.                                </p>
                               <Link to="/artist"> <button className='my-24 text-lg leading-relaxed text-gray-600 transition-all hover:text-gray-800'>Read more</button> </Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className="w-full lg:w-4/12 ml-auto mr-auto px-4">
                            <img
                                alt="..."
                                className="max-w-full rounded-lg shadow-lg"
                                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                            />
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default AboutArt;