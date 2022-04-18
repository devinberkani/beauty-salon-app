import React, { useState, useContext } from 'react';
import data from '../data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showModal, setshowModal] = useState(false);
  const [user, setUser] = useState('');
  const [userInfo, setUserInfo] = useState({
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

  const openModal = (id) => {
    const newUserInfo = data.filter((item) => {
      return item.id == id;
    });
    setUserInfo(newUserInfo[0]);
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
        userInfo,
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
