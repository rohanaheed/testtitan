
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

function AboutUs() {
  const islg = useMediaQuery({ query: '(min-width: 1024px)' })

  const [toggle, setToggle] = useState(islg ? true : false);
  return (
    <>
      <div
        className="relative pt-16 flex content-center items-center justify-center"
        style={{ minHeight: '30vh' }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: 'url("/assets/bg.jpg")' }}
        >

        </div>
        <div className="container relative mx-auto px-24">
          <div className='w-full px-14'>
            <h3 className="text-3xl font-semibold text-34 text-white text-center">About Us</h3>
          </div>
        </div>
      </div>


      <section className="container relative mx-auto px-24 py-99">
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          QAIA.IO showcased the most prestigious collection of fine art NFT collectibles.  Enjoy a visual feast of several precious antiques, artworks, and the magnificent flair of specifically curated NFTs.
        </p>
      </section>




      <section className="relative bg-gray-100 mb-99 py-64">
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
                <h3 className="text-3xl font-semibold">Building a prestigious digital art space.</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  At QAIA.IO, we're excited to integrate fine arts with NFTs. They are unique, and tradable within collectors.

                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <img className='w-205 absolute -bottom-28 -right-20 z-10 hidden lg:block' src="/assets/arrow-graphic.png" alt="" /> */}
      </section>


      <section className="container relative mx-auto px-24 pb-99">
        <h3 className="font-semibold text-28 text-center mb-24">Security Reports</h3>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          QAIA.IO strives to be the most reliable and secure NFT marketplace for fine arts. We ensure all reports are reviewed by security experts and acted upon appropriately.
        </p>
      </section>


    </>
  );
}

export default AboutUs;
