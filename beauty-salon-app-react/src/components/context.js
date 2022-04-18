import React, { useState, useContext } from 'react';
import data from '../data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //modal for viewing a single client's info
  const [showViewModal, setShowViewModal] = useState(false);
  //modal for editing a single client's info
  const [showEditModal, setShowEditModal] = useState(false);
  //client being searched for in the input field
  const [clientSearch, setClientSearch] = useState('');
  //expanded client info displayed in modal
  const [clientInfo, setClientInfo] = useState({
    name: {
      firstName: '',
      lastName: '',
    },
    id: 0,
    address: '',
    phone: '',
    email: '',
    birthday: '',
    hairColorInfo: '',
  });

  const openViewModal = (id) => {
    const newClientInfo = data.filter((item) => {
      return item.id == id;
    });
    setClientInfo(newClientInfo[0]);
    setShowViewModal(true);
  };

  const closeViewModal = () => {
    setShowViewModal(false);
  };

  const openEditModal = (id) => {
    const newClientInfo = data.filter((item) => {
      return item.id == id;
    });
    setClientInfo(newClientInfo[0]);
    if (showViewModal) {
      setShowViewModal(false);
    }
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        showViewModal,
        openViewModal,
        closeViewModal,
        showEditModal,
        openEditModal,
        closeEditModal,
        clientSearch,
        setClientSearch,
        clientInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook -- ********IMPORTANT********** -- MUST START WITH 'use'

//must be invoked, you don't need to import useContext when doing it this way

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
