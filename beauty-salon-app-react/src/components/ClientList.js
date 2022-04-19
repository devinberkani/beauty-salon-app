import React from 'react';
import data from '../data';
import { useGlobalContext } from './context';
import ViewClientModal from './ViewClientModal';

const ClientList = () => {
  const { openViewModal, openEditModal, clientSearch } = useGlobalContext();

  return (
    <div>
      <h2>Client List</h2>
      <button className='btn add-new-btn'>Add New Client</button>
      <table className='client-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Hair Color Info</th>
            <th>View/Edit Client</th>
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
              ).includes(clientSearch)
            )
            //display data in table
            .map((client) => (
              <tr key={client.id}>
                <td>
                  {client.name.firstName} {client.name.lastName}
                </td>
                <td>{client.phone}</td>
                {/* only show if client has hair color info */}
                <td>{client.hairColorInfo ? client.hairColorInfo : 'None'}</td>
                <td>
                  <button
                    className='btn'
                    onClick={() => openViewModal(client.id)}
                  >
                    View
                  </button>
                  <button
                    className='edit-btn'
                    onClick={() => openEditModal(client.id)}
                  >
                    Edit
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
