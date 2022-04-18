import React from 'react';
import EditClientModal from './EditClientModal';
import ViewClientModal from './ViewClientModal';
import Navbar from './Navbar';
import ClientSearch from './ClientSearch';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import ClientEvents from './ClientEvents';

const Dashboard = () => {
  return (
    <div>
      <EditClientModal />
      <ViewClientModal />
      <Navbar />
      <ClientEvents />
      <ClientSearch />
    </div>
  );
};

export default withAuthenticationRequired(Dashboard);
