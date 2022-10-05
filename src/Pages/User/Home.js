
import React from "react";
import Header from "../../components/Homepage/Header";
import AboutUs from '../../components/Homepage/AboutUs'
import BusinessDetail from "../../components/Homepage/BusinessDetail";
import GalleryContainer from "../../components/common/GalleryContainer";
import Newsletter from "../../components/common/Navbar/Newsletter";
import Slider from "../../components/common/Slider";

function HomePage() {
  return (
    <>
        <Header />

        <Slider />

        <section className="container mx-auto px-30 md:px-62 py-52 mb-54">
          <main className='flex flex-col items-center lg:flex-row gap-5 lg:gap-9 justify-between'>
            <div className="video-rounded w-full rounded-5">
              {/* <ReactPlayer playing={true} loop={true} controls={false} muted={true} url='https://www.youtube.com/watch?v=0xL1eeoO-9U&ab_channel=WatchMk' /> */}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/0xL1eeoO-9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-24 lg:text-28 mb-10 text-white leading-58">Discover, collect, and sell extraordinary NFTs</h3>
              <p className="mt-4 text-16 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cumque cum. Debitis nihil unde, molestiae fugiat sapiente corrupti officia itaque.                        </p>
            </div>
          </main>
        </section>

        {/* <main className='bg-white'> */}
        <section className="mx-auto px-30 md:px-62 py-52">
          <main className='flex flex-col mt-50 items-center lg:flex-row gap-5 lg:gap-9 justify-around'>
            <div className="w-full">
              <img className='mx-auto' style={{ height: '380px' }} src="/assets/image/leoi.jpeg" alt="" />
            </div>
            <div className="w-full">
              <img src="/assets/image/king.png" alt="" />
            </div>
          </main>
        </section>
        {/* </main> */}


      <Newsletter />
    </>
  );
}

export default HomePage;
