import { useEffect } from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core'
import ClientRoutes from "./routes/ClientRoutes";
import UserRoutes from "./routes/UserRoutes";

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  const history = useHistory();
  const url = history?.location?.pathname?.split('/')?.includes('admin');
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
