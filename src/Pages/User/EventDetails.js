
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { API_URL } from '../../utils/contant'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

function EventDetails() {
  const history = useHistory();
  const { id } = useParams()
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const adminToken = localStorage.getItem('token');
  const [options, setOpetions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    _getNFTs();
    _getNFTsList()
  }, []);

  const onSelect = (e) => {
    setSelected(e)
  }

  const onRemove = (e) => {
    setSelected(e)
  }

  const _getNFTsList = () => {
    const headers = {
      Authorization: `Bearer ${adminToken}`,
    };
    axios.get(API_URL + 'user/nfts', { headers: headers })
      .then(res => {
        setOpetions(res?.data)
      })
      .catch(err => {
      })
  }
  const _getNFTs = () => {
    axios.get(API_URL + `user/event/${id}`)
      .then(res => {
        setLoading(false);
        setData(res?.data[0]);
        setSelected(res?.data[0]?.nfts)
      })
  }

  console.log(data?.nfts, selected)
  const saveEvent = () => {
    setLoader(true);
    var formData = new FormData();
    // formData.append("minimumBid", price);
    for (let i = 0; i < selected?.length; i++) {
      formData.append(`NFTIds[${i}]`, selected[i]?._id)
    }
    const headers = {
      Authorization: `Bearer ${adminToken}`,
    };
    axios.patch(API_URL + `admin/event/edit/${id}`, formData, { headers: headers })
      .then(res => {
        setLoader(false);
        // history.push('/admin/events')
      })
      .catch(err => {
        // setErrors({
        //     'err': err?.data?.message
        // })
        setLoader(false);
      })
  }
  return (
    <>
      <section class="event-container">
        <h6 onClick={() => history.push('/events')} className='mt-4 text-xl mt-5 leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
          {"< Back"} &nbsp;&nbsp;&nbsp;&nbsp;
        </h6>
        <h6 className='mt-4 text-xl text-center leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
          Event Details
        </h6>
        <div className='description-section'>
          {/* <div className='card-img'> */}
          <img src={data?.coverImage ? data?.coverImage : 'https://www.harpersbazaararabia.com/cloud/2021/09/10/IMGWORLD-1.png'} alt='Card pic' />
          {/* </div> */}
          <div className='event-card-details'>
            <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold nft-desc'>
              Name: {data?.name}
            </p>
            <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold nft-desc'>
              Description: {data?.description}
            </p>
          </div>
        </div>

        <h6 className='mt-32 text-xl text-center leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
          List NFT
        </h6>
        <div className='event-section list-nft mt-0'>
          {selected?.map(item => (
            <div className='event-card  mb-100' style={{ zIndex: '0' }}>
              <a
                onClick={() => history.push({
                  pathname: `/nft-details/${item?._id}`,
                })}>
                <img src={item?.image ? item?.image : 'https://archive.org/download/img-world-ticket-offers/yvA5SpUH-IMG-Worlds-1200x800.jpg'} alt='Card Img' />
                <div className='event-card-details'>
                  <h6 className='mt-4 text-lg leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
                    {item?.name}
                  </h6>
                  <p className='text-lg leading-relaxed text-gray-700'>
                    {item?.artistName}
                  </p>
                  <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold nft-desc'>
                    {item?.description}
                  </p>
                </div>
              </a>
            </div>
          ))
          }
        </div>
      </section>

    </>
  );
}


export default EventDetails;
