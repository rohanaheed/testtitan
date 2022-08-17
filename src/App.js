import { useEffect } from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Web3 from "web3";
import { useWeb3React } from '@web3-react/core'
import ClientRoutes from "./routes/ClientRoutes";
import UserRoutes from "./routes/UserRoutes";
import { injected, walletconnect } from "./components/wallet/connector";

function App() {
  const history = useHistory();
  const url = history?.location?.pathname?.split('/')?.includes('admin');
  const { account, activate } = useWeb3React();

  const connect = async (name) => {
    try {
      if (name === 'meta') {
        await activate(injected);
        localStorage.setItem('type', 'meta');
      } else {
        // console.log("abc", walletconnect)
        await activate(walletconnect);
        localStorage.setItem('type', 'wallet');
      }
    } catch (ex) {
      console.log(ex)
    }
  }
  useEffect(() => {
    const walletType = localStorage?.getItem('type')
    if (walletType === "meta") {
      connect("meta")
    } else if (walletType === "wallet") {
      connect("")
    }
  }, [])
  return (
    <Switch>
      {/* <Web3ReactProvider getLibrary={getLibrary}> */}
        {url ?
          <Route path="/admin/:page?" component={ClientRoutes} /> :
          <Route path="/:page?" component={UserRoutes} />
        }
      {/* </Web3ReactProvider> */}
    </Switch>
  );
}

export default App;
