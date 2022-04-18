import React from 'react';
import ClientList from './ClientList';
import { useGlobalContext } from './context';

const ClientSearch = () => {
  const { clientSearch, setClientSearch } = useGlobalContext();

  return (
    <>
      <div className='client-search'>
        <h2>Client Search</h2>
        <label className='client-search-label'>Enter Name:</label>
        <input
          className='client-search-input'
          type='text'
          value={clientSearch}
          placeholder='i.e. John Smith'
          onChange={(e) => setClientSearch(e.target.value)}
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
