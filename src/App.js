import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core'
import Dashboard from "./pages/Admin/Dashboard";
import Home from "./pages/User/Home";
import Art from "./pages/User/Art";
import Explore from "./pages/User/Explore";
import Artist from "./pages/User/Artist";

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
