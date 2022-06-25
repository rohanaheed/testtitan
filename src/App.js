import { useEffect } from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core'
import Home from "./pages/User/Home";
import Art from "./pages/User/Art";
import Explore from "./pages/User/Explore";
import Artist from "./pages/User/Artist";
import AdminLayout from "./components/common/AdminLayout";
import AdminSignIn from "./pages/Admin/Auth/Login";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import CreateEvent from "./pages/Admin/CreateEvent";
import EventList from "./pages/Admin/EventList";
import CreateMission from "./pages/Admin/CreateMission";
import MissionList from "./pages/Admin/MissionList";

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
