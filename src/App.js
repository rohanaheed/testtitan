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

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  const history = useHistory();
  const url = history?.location?.pathname?.split('/')?.includes('admin');
  const urlCheck = history?.location?.pathname?.split('/');
  const adminToken = localStorage.getItem('token');
  const userInfo = JSON.parse(localStorage.getItem('login_user'));

  useEffect(() => {
    if (url && adminToken) {
      if (urlCheck?.includes('dashboard')) {
        history.push('/admin/dashboard');
      } else {
        history.push(history?.location?.pathname);
      }
    } else if (url) {
      history.push('/admin/signin');
    }
  }, [history, url, adminToken, urlCheck])

  return (
    <Switch>
      <Web3ReactProvider getLibrary={getLibrary}>
        {url ?
          <AdminLayout>
            <Route path="/admin/signin" component={AdminSignIn} />
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/create-event" component={CreateEvent} />
            <Route path="/admin/events" component={EventList} />
            <Route path="/admin/create-mission" component={CreateMission} />
            <Route path="/admin/missions" component={MissionList} />
          </AdminLayout> :
          <Layout>
            <Route path="/art" component={Art} />
            <Route path="/explore" component={Explore} />
            <Route path="/artist" component={Artist} />
            <Route exact path="/" component={Home} />
          </Layout>
        }
      </Web3ReactProvider>
    </Switch>
  );
}

export default App;
