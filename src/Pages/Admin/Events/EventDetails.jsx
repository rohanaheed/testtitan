
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import axios from 'axios';
import { API_URL_ADMIN } from '../../../utils/contant';
import { useHistory, useParams } from 'react-router-dom';
import Navbar from '../../../components/Admin/Navbar';

function EventDetails() {
    const islg = useMediaQuery({ query: '(min-width: 1024px)' });
    const history = useHistory()
    const { id } = useParams()
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const adminToken = localStorage.getItem('token');

    useEffect(() => {
        _getNFTs();
    }, [])
    const _getNFTs = () => {
        const headers = {
            Authorization: `Bearer ${adminToken}`,
        };
        axios.get(API_URL_ADMIN + `admin/event/${id}`, { headers: headers })
            .then(res => {
                setLoading(false);
                setData(res?.data[0]);
            })
    }

    return (
        <>
            <Navbar />
            <section class="event-container">
                <h6 onClick={() => history.push('/admin/events')} className='mt-4 text-xl mt-5 leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
                {"< Back"} &nbsp;&nbsp;&nbsp;&nbsp;
                </h6>
                <h6 className='mt-4 text-xl text-center leading-relaxed text-gray-700 cursor-pointer font-medium transition-all hover:text-gray-900'>
                    Event Details
                </h6>
                <div className='description-section'>
                    <div className='card-img'>
                        <img src={data?.coverImage ? data?.coverImage : 'https://www.harpersbazaararabia.com/cloud/2021/09/10/IMGWORLD-1.png'} alt='Card pic' />
                    </div>
                    <div className='event-card-details'>
                        <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold'>
                            Name: {data?.name}
                        </p>
                        <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold'>
                            Description: {data?.description}
                        </p>
                        <p className='text-lg leading-relaxed text-gray-500 mb-6 font-bold'>
                            Artists: {data?.NFTArtist}
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

export default EventDetails;
