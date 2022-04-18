import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

const WelcomeUser = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className='welcome-msg'>
        <span>Welcome, {user.name}!</span>
        <LogoutButton />
      </div>
    )
  );
};

export default WelcomeUser;
