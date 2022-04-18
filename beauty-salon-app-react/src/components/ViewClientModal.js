import React from 'react';
import { useGlobalContext } from './context';
import data from '../data';

const ViewClientModal = ({}) => {
  const { showViewModal, closeViewModal, clientInfo, openEditModal } =
    useGlobalContext();

  const {
    name,
    id,
    phone,
    address,
    email,
    birthday,
    hairColorInfo,
    specialEvents,
  } = clientInfo;

  return (
    <div className={`modal-overlay ${showViewModal && 'show-modal'}`}>
      <div className='modal-container'>
        <h2>Client Info</h2>
        <ul>
          <li>
            <span className='bold'>Name:</span> {name.firstName} {name.lastName}
          </li>
          <li>
            <span className='bold'>Phone:</span> {phone}
          </li>
          <li>
            <span className='bold'>Email:</span> {email}
          </li>
          <li>
            <span className='bold'>Address:</span> {address}
          </li>
          <li>
            <span className='bold'>Birthday:</span> {birthday}
          </li>
          {/* only show hairColorInfo if client has it */}
          {hairColorInfo ? (
            <li>
              <span className='bold'>Hair Color Info:</span> {hairColorInfo}
            </li>
          ) : null}
          {specialEvents ? (
            <li>
              <span className='bold'>Special Events:</span> {specialEvents}
            </li>
          ) : null}
        </ul>
        <div className='btn-container'>
          <button className='btn' onClick={closeViewModal}>
            Close
          </button>
          <button className='btn' onClick={() => openEditModal(id)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewClientModal;
