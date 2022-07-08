import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Art from '../pages/User/Art';
import Explore from '../pages/User/Explore';
import Artist from '../pages/User/Artist';
import Home from '../pages/User/Home';
import AboutUs from '../pages/User/AboutUs';
import Layout from '../components/layout/Layout';

const UserRoutes = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/art" component={Art} />
        <Route path="/explore" component={Explore} />
        <Route path="/artist" component={Artist} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        {/* <Redirect from='/' to='/' /> */}
      </Layout>
    </Switch>
  )
}

export default withRouter(UserRoutes);