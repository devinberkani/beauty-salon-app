import React from 'react';
import EditClientModal from './EditClientModal';
import ViewClientModal from './ViewClientModal';
import Navbar from './Navbar';
import ClientSearch from './ClientSearch';

const Dashboard = () => {
  return (
    <div>
      <EditClientModal />
      <ViewClientModal />
      <Navbar />
      <ClientSearch />
    </div>
  );
};

export default Dashboard;
