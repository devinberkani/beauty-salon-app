import React from 'react';
import ClientList from './ClientList';

const ClientSearch = () => {
  return (
    <>
      <div className='client-search'>
        <label className='client-search-label'>Search For Client</label>
        <input className='client-search-input' type='text' />
        <button className='btn'>Search</button>
      </div>
      <div className='client-list'>
        <ClientList />
      </div>
    </>
  );
};

export default ClientSearch;
