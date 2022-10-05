import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import { useMediaQuery } from 'react-responsive'
import 'swiper/swiper.min.css'
import CollectionItem from "./CollectionItem";
import { useEffect, useState } from "react";
import axios from 'axios';
import { API_URL } from '../../utils/contant';

const Slider = () => {
    const islg = useMediaQuery({ query: '(min-width: 1024px)' })
    const ismd = useMediaQuery({ query: '(max-width: 768px)' })
    const issm = useMediaQuery({ query: '(max-width: 640px)' })

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()

    useEffect(() => {
        _getNFTs();
    }, [])

    const _getNFTs = () => {
        axios.get(API_URL + 'user/nfts')
            .then(res => {
                setLoading(false);
                setData(res?.data?.filter(item => item?.nftStatus === "Auction"));
            })
    }


    return (
        <>
            <section className="container mx-auto px-24 lg:px-99 pb-99 pt-0 lg:py-99">

                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    initialSlide={4}
                    spaceBetween={10}
                    slidesPerView={issm ? 1.3 : ismd ? 2.6 : islg ? 4 : 1.3}
                    centeredSlides={true}>
                    {
                        data?.map((item => (
                            <SwiperSlide>
                                <CollectionItem slider item={item} />
                            </SwiperSlide>
                        )))
                    }
                </Swiper>
            </section>
        </>

    )
}


export default Slider;