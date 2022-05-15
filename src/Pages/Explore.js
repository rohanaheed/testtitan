
import Header from "../components/Homepage/Header";
import Filter from "../components/Homepage/Filter";
import Pagination from "../components/common/Pagination";
import GalleryContainer from "../components/common/GalleryContainer";

function Explore() {
  return (
    <>
  <main className="flex">
  <section className="w-384">
    <Filter />
  </section>
    <section className="w-full">
      <GalleryContainer>
      </GalleryContainer>
      <Pagination />
    </section>
    </main> 
    </>
  );
}

export default Explore;
