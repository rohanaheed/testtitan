
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

function EventDetails() {
  const islg = useMediaQuery({ query: '(min-width: 1024px)' })

  const [toggle, setToggle] = useState(islg ? true : false);
  return (
    <>
      <section class="event-container">
        <h6 className='mt-4 text-xl text-center leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
          Single Event
        </h6>
        <div className='description-section'>
          <div className='card-img'>
            <img src='https://www.harpersbazaararabia.com/cloud/2021/09/10/IMGWORLD-1.png' alt='Card pic' />
          </div>
          <div className='event-card-details'>
            <h6 className='mt-4 text-lg leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
              Event Name
            </h6>
            <p className='text-lg leading-relaxed text-gray-700'>
              Event Details
            </p>
            <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold nft-desc'>
              Event Description
            </p>
          </div>
        </div>

        <h6 className='mt-32 text-xl text-center leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
          List NFT
        </h6>

        <div className='event-section list-nft mt-0'>
          <div className='event-card'>
            <a href='/event-details'>
              <img src='https://archive.org/download/img-world-ticket-offers/yvA5SpUH-IMG-Worlds-1200x800.jpg' alt='Card Img' />
              <div className='event-card-details'>
                <h6 className='mt-4 text-lg leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
                  Event Name
                </h6>
                <p className='text-lg leading-relaxed text-gray-700'>
                  Event Details
                </p>
                <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold nft-desc'>
                  Event Description
                </p>
              </div>
            </a>
          </div>

          <div className='event-card'>
            <a href='/event-details'>
              <img src='https://archive.org/download/img-world-ticket-offers/yvA5SpUH-IMG-Worlds-1200x800.jpg' alt='Card Img' />
              <div className='event-card-details'>
                <h6 className='mt-4 text-lg leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
                  Event Name
                </h6>
                <p className='text-lg leading-relaxed text-gray-700'>
                  Event Details
                </p>
                <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold nft-desc'>
                  Event Description
                </p>
              </div>
            </a>
          </div>

          <div className='event-card'>
            <a href='/event-details'>
              <img src='https://archive.org/download/img-world-ticket-offers/yvA5SpUH-IMG-Worlds-1200x800.jpg' alt='Card Img' />
              <div className='event-card-details'>
                <h6 className='mt-4 text-lg leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
                  Event Name
                </h6>
                <p className='text-lg leading-relaxed text-gray-700'>
                  Event Details
                </p>
                <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold nft-desc'>
                  Event Description
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}

export default EventDetails;
