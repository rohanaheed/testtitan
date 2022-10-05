
import ArtistHeader from "../../components/Homepage/ArtistHeader";
import GalleryContainer from "../../components/common/GalleryContainer";
import Newsletter from "../../components/common/Navbar/Newsletter";

function HomePage() {
  return (
    <>
      <ArtistHeader />
      <GalleryContainer>
        <div>
          {/* <h3 className="text-xl font-semibold">Explore more art from <span className="text-primary">Leonardo da Vinci</span> </h3> */}
        </div>
      </GalleryContainer>
      <Newsletter />
    </>
  );
}

export default HomePage;
