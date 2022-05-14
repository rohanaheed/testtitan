
import Navbar from "../components/common/Navbar";
import Header from "../components/Homepage/Header";
import AboutUs from '../components/Homepage/AboutUs'
import BusinessDetail from "../components/Homepage/BusinessDetail";
import GalleryContainer from "../components/common/GalleryContainer";
import Footer from "../components/common/Footer";

function HomePage() {
  return (
    <>

      <Navbar />
      <Header />
      <GalleryContainer>
      <div>
        <h3 className="text-xl font-semibold">Explore more art from <span className="text-blue-600">THREE MUSKETEERS</span> </h3>
      </div>
      </GalleryContainer>
      <Footer />

    </>
  );
}

export default HomePage;
