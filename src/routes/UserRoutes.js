import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Art from '../Pages/User/Art';
import Explore from '../Pages/User/Explore';
import Artist from '../Pages/User/Artist';
import Home from '../Pages/User/Home';
import Layout from '../components/layout/Layout';

const UserRoutes = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/art" component={Art} />
        <Route path="/explore" component={Explore} />
        <Route path="/artist" component={Artist} />
        <Route exact path="/" component={Home} />
        <Redirect from='/' to='/' />
      </Layout>
    </Switch>
  )
}

export default withRouter(UserRoutes);