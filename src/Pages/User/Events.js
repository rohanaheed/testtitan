
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios';
import { API_URL } from '../../utils/contant';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Events() {
  const islg = useMediaQuery({ query: '(min-width: 1024px)' });
  const history = useHistory();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    _getNFTs();
  }, [])

  const _getNFTs = () => {
    axios.get(API_URL + 'user/events/')
      .then(res => {
        setLoading(false);
        setData(res?.data);
      })
  }

  const [toggle, setToggle] = useState(islg ? true : false);
  return (
    <>
      <section class="event-container">
        <div className='event-section'>
          {data?.length > 0 ? data?.map(item => (
            <div style={{ zIndex: '0' }} className='event-card' onClick={() => history.push(`/event-details/${item?._id}`)}>
              <a href='#!'>
                <img src={item?.coverImage ? item?.coverImage : 'https://archive.org/download/img-world-ticket-offers/yvA5SpUH-IMG-Worlds-1200x800.jpg'} alt='Card Img' />
                <div className='event-card-details bg-white'>
                  <h6 className='mt-4 text-lg leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
                    {item?.name ? item?.name : 'Event Name'}
                  </h6>
                  <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold nft-desc'>
                    {item?.description ? item.description.slice(0, 23) + "..." : 'Event Description'}
                  </p>
                </div>
              </a>
            </div>
          )) :
            loading ?
              <div className='centered'>
                <div class="loaderMarket"></div>
              </div>
              :
              <div className='centered hidden'>
                No Record Found
              </div>
          }
        </div>
      </section>

    </>
  );
}

export default Events;
