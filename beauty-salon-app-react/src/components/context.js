import React, { useState, useContext } from 'react';
import data from '../data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showModal, setshowModal] = useState(false);
  const [user, setUser] = useState('');

  const openModal = () => {
    setshowModal(true);
  };

  const closeModal = () => {
    setshowModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        showModal,
        openModal,
        closeModal,
        user,
        setUser,
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
