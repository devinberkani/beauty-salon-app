import React from 'react';
import ClientList from './ClientList';
import { useGlobalContext } from './context';

const ClientSearch = () => {
  const { user, setUser } = useGlobalContext();

  return (
    <>
      <div className='client-search'>
        <label className='client-search-label'>Search For Client</label>
        <input
          className='client-search-input'
          type='text'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button className='btn'>Search</button>
      </div>
      <div className='client-list'>
        <ClientList />
      </div>
    </>
  );
};

export default ClientSearch;
