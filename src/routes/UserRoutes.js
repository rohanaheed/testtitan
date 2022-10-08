import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Art from '../Pages/User/Art';
import Explore from '../Pages/User/Explore';
import Artist from '../Pages/User/Artist';
import Home from '../Pages/User/Home';
import AboutUs from '../Pages/User/AboutUs';
import Events from '../Pages/User/Events';
import EventDeatils from '../Pages/User/EventDetails';
import Layout from '../components/layout/Layout';
import PrivacyPolicy from '../Pages/Policy/PrivacyPolicy';
import Term from '../Pages/Policy/Term';

const UserRoutes = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/nft-details/:id" component={Art} />
        <Route path="/explore" component={Explore} />
        <Route path="/artist" component={Artist} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/event-details/:id" component={EventDeatils} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/term" component={Term} />
        {/* <Redirect from='/' to='/' /> */}
      </Layout>
    </Switch>
  )
}

export default withRouter(UserRoutes);