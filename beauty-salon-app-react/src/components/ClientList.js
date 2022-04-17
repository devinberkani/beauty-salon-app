import React from 'react';
import data from '../data';
import SingleClient from './SingleClient';

const ClientList = () => {
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
