
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Artist from "./Pages/Artist";
import Art from "./Pages/Art";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="art" element={<Art />} />
          <Route path="explore" element={<Explore />} />
          <Route path="artist" element={<Artist />} />
        </Route>
      </Routes>


    </>
  );
}

export default App;
