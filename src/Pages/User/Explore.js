
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { AiOutlineFilter } from "react-icons/ai";
import Filter from "../../components/Homepage/Filter";
import Pagination from "../../components/common/Pagination";
import GalleryContainer from "../../components/common/GalleryContainer";

function Explore() {
  const islg = useMediaQuery({ query: '(min-width: 1024px)' })

  const [toggle, setToggle] = useState(islg ? true : false);
  return (
    <>
      <main className="flex">
        <section className="absolute lg:static w-full md:w-384">
          {
            toggle && <Filter />
          }
        </section>
        <section className="w-full">
          <section className="filter-btn lg:hidden flex items-center container mx-auto px-24 md:px-12 h-76">
            <AiOutlineFilter onClick={() => setToggle(!toggle)}  className="text-27 cursor-pointer text-white ml-auto" />
          </section>
          <GalleryContainer>
          </GalleryContainer>
          <Pagination />
        </section>
      </main>
    </>
  );
}

export default Explore;
