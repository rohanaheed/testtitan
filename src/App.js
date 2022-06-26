import { useEffect } from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core'
import Home from "./Pages/User/Home";
import Art from "./Pages/User/Art";
import Explore from "./Pages/User/Explore";
import Artist from "./Pages/User/Artist";
import AdminLayout from "./components/common/AdminLayout";
import AdminSignIn from "./Pages/Admin/Auth/Login";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import CreateEvent from "./Pages/Admin/CreateEvent";
import EventList from "./Pages/Admin/EventList";
import CreateMission from "./Pages/Admin/CreateMission";
import MissionList from "./Pages/Admin/MissionList";
import CreateNFTs from "./Pages/Admin/NFTs/CreateNFTs";
import NftsList from "./Pages/Admin/NFTs/NftsList";
import ClientRoutes from "./routes/ClientRoutes";
import UserRoutes from "./routes/UserRoutes";

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  const history = useHistory();
  const url = history?.location?.pathname?.split('/')?.includes('admin');
  const urlCheck = history?.location?.pathname?.split('/');
  return (
    <Switch>
      <Web3ReactProvider getLibrary={getLibrary}>
        {url ?
          <Route path="/admin/:page?" component={ClientRoutes} /> :
          <Route path="/:page?" component={UserRoutes} />
        }
      </Web3ReactProvider>
    </Switch>
  );
}

export default App;
