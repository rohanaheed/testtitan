
import {useState} from 'react'
import { MdFilterList } from "react-icons/md";
import Filter from "../components/Homepage/Filter";
import Pagination from "../components/common/Pagination";
import GalleryContainer from "../components/common/GalleryContainer";

function Explore() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <main className="flex">
        <section className="absolute lg:static w-384">
          {
            toggle && <Filter />
          }
        </section>
        <section className="w-full">
          <section className="container mx-auto px-24 md:px-12 mt-42 mb-26 block lg:hidden">
            <div className="px--6 flex justify-end">
            <button onClick={() => setToggle(!toggle)} className="flex items-center gap-2 text-white white-shadow bg-gray-700 transition-all hover:bg-gray-900 rounded-8 py-8 px-26 mt-24">
              <MdFilterList className="text-22 cursor-pointer text-white" />
              Filter
              </button>
            </div>
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
