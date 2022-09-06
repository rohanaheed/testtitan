import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, withRouter } from 'react-router-dom';
import AdminLayout from '../components/common/AdminLayout';
import AdminSignIn from '../Pages/Admin/Auth/Login';
import CreateEvent from '../Pages/Admin/CreateEvent';
import Dashboard from '../Pages/Admin/Dashboard/Dashboard';
import EventList from '../Pages/Admin/EventList';
import EventDetails from '../Pages/Admin/Events/EventDetails';
import CreateNFTs from '../Pages/Admin/NFTs/CreateNFTs';
import NftsList from '../Pages/Admin/NFTs/NftsList';
import isEmpty from '../utils/isEmpty';
import ClientPrivateRoute from './ClientPrivateRoute';

const ClientRoutes = () => {
  const history = useHistory();
  const location = history?.location?.pathname;
  const auth = localStorage.getItem('token');
  useEffect(() => {
    if (!isEmpty(auth) && location.includes('admin')) {
      history.push(history?.location?.pathname)
    } else if (location.includes('admin')) {
      history.push('/admin/signin')
    }
  }, [])
  return (
    <Switch>
      <AdminLayout>
        <Route path="/admin/signin" component={AdminSignIn} />
        <ClientPrivateRoute path="/admin/dashboard" component={Dashboard} />
        <ClientPrivateRoute path="/admin/create-event" component={CreateEvent} />
        <ClientPrivateRoute path="/admin/edit-event" component={CreateEvent} />
        <ClientPrivateRoute path="/admin/events" component={EventList} />
        <ClientPrivateRoute path="/admin/event/:id" component={EventDetails} />
        <ClientPrivateRoute path="/admin/create-nft" component={CreateNFTs} />
        <ClientPrivateRoute path="/admin/edit-nft" component={CreateNFTs} />
        <ClientPrivateRoute path="/admin/nfts" component={NftsList} />
        {/* <Redirect from='/admin' to='/admin/signin' /> */}
      </AdminLayout>
    </Switch>
  )
}

export default withRouter(ClientRoutes);
