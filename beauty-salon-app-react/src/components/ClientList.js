import React from 'react';
import data from '../data';
import { useGlobalContext } from './context';
import SingleClientModal from './SingleClientModal';

const ClientList = () => {
  const { openModal, user } = useGlobalContext();

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
          {data
            //filter data based on match of first and last name to lower case
            .filter((client) =>
              (
                client.name.firstName.toLowerCase() +
                ' ' +
                client.name.lastName.toLowerCase()
              ).includes(user)
            )
            //display data in table
            .map((client) => (
              <tr key={client.id}>
                <td>
                  {client.name.firstName} {client.name.lastName}
                </td>
                <td>{client.phone}</td>
                <td>{client.address}</td>
                <td>
                  <button
                    className='btn'
                    onClick={openModal}
                    id={client.id}
                    name={client.name}
                  >
                    More Info
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
