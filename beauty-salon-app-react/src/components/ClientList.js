import React, { useState } from 'react';
import data from '../data';
import { useGlobalContext } from './context';
import SingleClientModal from './SingleClientModal';

const ClientList = () => {
  const { openModal } = useGlobalContext();

  return (
    <div>
      <h2>Client List</h2>
      <table className='client-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((client) => {
            return (
              <tr key={client.id}>
                <td>
                  {client.name.firstName} {client.name.lastName}
                </td>
                <td>{client.phone}</td>
                <td>{client.address}</td>
                <td>
                  <button className='btn' onClick={openModal}>
                    More Info
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
