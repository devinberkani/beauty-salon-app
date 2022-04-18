import React from 'react';
import LogoutButton from './LogoutButton';
import WelcomeUser from './WelcomeUser';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <div>
            <li className='logo'>Client Manager</li>
          </div>
          <WelcomeUser />
          <LogoutButton />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
