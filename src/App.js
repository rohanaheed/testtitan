import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core'
import Dashboard from "./Pages/Admin/Dashboard";
import Home from "./Pages/User/Home";
import Art from "./Pages/User/Art";
import Explore from "./Pages/User/Explore";
import Artist from "./Pages/User/Artist";

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  const history = useHistory();
  return (
    <Layout>
      <Switch>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Route exact path="/admin" component={Dashboard} />
          <Route path="/art" component={Art} />
          <Route path="/explore" component={Explore} />
          <Route path="/artist" component={Artist} />
          <Route exact path="/" component={Home} />
        </Web3ReactProvider>
      </Switch>
    </Layout>
  );
}

export default App;
