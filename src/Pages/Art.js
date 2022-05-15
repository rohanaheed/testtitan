
import ArtHeader from "../components/Homepage/ArtHeader";
import AboutArt from "../components/Homepage/AboutArt";
import GalleryContainer from "../components/common/GalleryContainer";

function Art() {
  return (
    <>

      <ArtHeader />
      <AboutArt />
      <GalleryContainer>
      <div>
        <h3 className="text-xl font-semibold">Explore more art from <span className="text-blue-600">THREE MUSKETEERS</span> </h3>
      </div>
      </GalleryContainer>

    </>
  );
}

export default Art;
