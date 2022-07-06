
import React from "react";
import Header from "../../components/Homepage/Header";
import AboutUs from '../../components/Homepage/AboutUs'
import BusinessDetail from "../../components/Homepage/BusinessDetail";
import GalleryContainer from "../../components/common/GalleryContainer";

function HomePage() {
  return (
    <>
      <Header />
      <AboutUs />
      <BusinessDetail />
      <GalleryContainer>
      <div>
        <h3 className="text-3xl font-semibold">Discover our Artworks</h3>
        <p className="mt-4 text-lg text-gray-600">
          Browse and purchase your favourite piece of pristine artwork below!
        </p>
      </div>
      </GalleryContainer>
    </>
  );
}

export default HomePage;
