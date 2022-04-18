import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <div>
            <li className='logo'>Salon Portal</li>
          </div>
          <Link to='/'>
            <li className='link'>Logout</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
