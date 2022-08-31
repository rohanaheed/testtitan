
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

function Events() {
  const islg = useMediaQuery({ query: '(min-width: 1024px)' })

  const [toggle, setToggle] = useState(islg ? true : false);
  return (
    <>
      <section class="event-container">
        <div className='event-section'>
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
                <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold'>
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
                <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold'>
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

export default Events;
