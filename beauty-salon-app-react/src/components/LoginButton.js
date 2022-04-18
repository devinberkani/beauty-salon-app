import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className='landing-page-btn' onClick={() => loginWithRedirect()}>
      Login/Register
    </button>
  );
};

export default LoginButton;
