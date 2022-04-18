import React from 'react';
import { useGlobalContext } from './context';
import data from '../data';

const EditClientModal = ({}) => {
  const { showEditModal, closeEditModal, clientInfo } = useGlobalContext();

  const {
    name,
    id,
    phone,
    address,
    email,
    birthday,
    hairColorInfo,
    clientEvent,
  } = clientInfo;

  return (
    <div className={`modal-overlay ${showEditModal && 'show-modal'}`}>
      <div className='modal-container'>
        <h2>Edit Client Info</h2>
        <ul>
          <li>
            <span className='bold'>First Name:</span>
            <input type='text' value={name.firstName} readOnly={true} />
          </li>
          <li>
            <span className='bold'>Last Name:</span>
            <input type='text' value={name.lastName} readOnly={true} />
          </li>
          <li>
            <span className='bold'>Phone:</span>
            <input type='text' value={phone} readOnly={true} />
          </li>
          <li>
            <span className='bold'>Email:</span>
            <input type='text' value={email} readOnly={true} />
          </li>
          <li>
            <span className='bold'>Address:</span>
            <input type='text' value={address} readOnly={true} />
          </li>
          <li>
            <span className='bold'>Birthday:</span>
            <input type='text' value={birthday} readOnly={true} />
          </li>
          {/* only show hairColorInfo if client has it */}
          {hairColorInfo ? (
            <li>
              <span className='bold'>Hair Color Info:</span>
              <input type='text' value={hairColorInfo} readOnly={true} />
            </li>
          ) : null}
          {clientEvent ? (
            <span>
              <li>
                <span className='bold'>Client Event:</span>
                <input type='text' value={clientEvent.event} readOnly={true} />
              </li>
              <li>
                <span className='bold'>Client Event Date:</span>
                <input type='text' value={clientEvent.date} readOnly={true} />
              </li>
            </span>
          ) : null}
        </ul>
        <div className='btn-container'>
          <button className='btn' onClick={closeEditModal}>
            Close
          </button>
          <button className='btn'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default EditClientModal;
