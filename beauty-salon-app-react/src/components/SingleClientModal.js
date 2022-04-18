import React from 'react';
import { useGlobalContext } from './context';
import data from '../data';

const SingleClientModal = ({}) => {
  const { showModal, closeModal, userInfo } = useGlobalContext();

  const { name, id, phone, address, email, birthday, hairColorInfo } = userInfo;

  return (
    <div className={`modal-overlay ${showModal && 'show-modal'}`}>
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
        </ul>
        <button className='btn' onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SingleClientModal;
