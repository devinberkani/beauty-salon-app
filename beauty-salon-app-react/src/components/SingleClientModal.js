import React from 'react';
import { useGlobalContext } from './context';
import data from '../data';

const SingleClientModal = () => {
  const { showModal, closeModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${showModal && 'show-modal'}`}>
      <div className='modal-container'>
        <h2>Client Info</h2>
        <button className='btn' onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SingleClientModal;
