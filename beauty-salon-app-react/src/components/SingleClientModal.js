import React from 'react';
import { useGlobalContext } from './context';

const SingleClientModal = () => {
  const { showModal, closeModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${showModal && 'show-modal'}`}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='btn' onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SingleClientModal;
