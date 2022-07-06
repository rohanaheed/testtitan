
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
          In 2017 the world witnessed the birth of CryptoKitties. For the first time, the world experienced a decentralized application built on blockchains but targetted towards a mainstream audience.
          <br />
          While CryptoKitties felt like a toy to many, it represented a dramatic shift in how we interact with items in the digital world. While previous digital items lived on company servers, blockchain-native items lived on shared, public blockchains owned by no single party. They could be viewed anywhere, exchanged openly, and truly owned in a way that was never before possible in the digital world.
          <br />
          Fascinated by the movement that was forming, Devin Finzer and Alex Atallah joined early adopter communities in Discord and started talking to users. With the artgallery beta launch in December 2017, the first open marketplace for any non-fungible token on the Ethereum blockchain was born.
          <br />
          Today, we’re proud to remain the largest general marketplace for user-owned digital items, supporting multiple blockchains, with the broadest set of categories and the best prices for new emerging digital item classes.
          <br />
          As a company, we’re thrilled to be at the center of this growing industry, and will continue to invest in our core infrastructure as we build the most accessible marketplace for buyers, sellers, and creators.                        </p>
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
                <h3 className="text-3xl font-semibold">Building an open digital economy</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  At artgallery, we're excited about a brand new type of digital good called a non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably scarce, tradeable, and usable across multiple applications. Just like physical goods, you can do whatever you want with them! You could throw them in the trash, gift them to a friend across the world, or go sell them on an open marketplace. But unlike physical goods, they're armed with all the programmability of digital goods.
                  <br />
                  A core part of our vision is that open protocols like Ethereum and interoperable standards like ERC-721 and ERC-1155 will enable vibrant new economies. We're building tools that allow consumers to trade their items freely, creators to launch new digital works, and developers to build rich, integrated marketplaces for their digital items.
                  <br />
                  We’re proud to be the first and largest marketplace for NFTs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className='w-205 absolute -bottom-28 -right-20 z-10 hidden lg:block' src="/assets/arrow-graphic.png" alt="" />
      </section>


      <section className="container relative mx-auto px-24 pb-99">
        <h3 className="font-semibold text-28 text-center mb-24">Security Reports</h3>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          artgallery strives to be the most trustworthy and secure marketplace for NFTs. Finding and eliminating current vulnerabilities is a top priority. artgallery highly values our partnership with the vulnerability hunting community and as such we ensure all reports are reviewed by security experts and acted upon appropriately.
        </p>
      </section>


    </>
  );
}

export default AboutUs;
