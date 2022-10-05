
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { AiOutlineFilter } from "react-icons/ai";
import Filter from "../../components/Homepage/Filter";
import Pagination from "../../components/common/Pagination";
import GalleryContainer from "../../components/common/GalleryContainer";
import axios from 'axios';
import { API_URL } from '../../utils/contant';
import Newsletter from '../../components/common/Navbar/Newsletter';

function Explore() {
  const islg = useMediaQuery({ query: '(min-width: 1024px)' })
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)
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
  const [toggle, setToggle] = useState(window?.innerWidth > 1000 ? true : false);
  return (
    <>
      <main className="flex">
        {/* <section className="absolute lg:static w-full md:w-384"> */}
        {/* {toggle &&
          <section className="admin-sidebar">
            <Filter />
          </section>
        } */}
        {/* <section className="w-full"> */}
        {/* <section className="page-content"> */}
          <section className="filter-btn lg:hidden flex items-center container mx-auto px-24 md:px-12 h-76">
            <AiOutlineFilter onClick={() => setToggle(!toggle)} className="text-27 cursor-pointer text-white ml-auto" />
          </section>
          {/* {console.log(data)} */}
          <GalleryContainer data={data} loading={loading}>
          </GalleryContainer>
          {/* <Pagination /> */}
        {/* </section> */}
      </main>
      <Newsletter />
    </>
  );
}

export default Explore;
