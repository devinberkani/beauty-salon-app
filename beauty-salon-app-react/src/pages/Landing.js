import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing-page'>
      <section className='landing-page-container'>
        <section className='landing-page-container-children'>
          <section>
            <h2 className='landing-page-logo'>Client Manager</h2>
            <p>
              Where professionals come to manage clients and do all the things.
            </p>
          </section>
          <section>
            <Link to='dashboard'>
              <button className='landing-page-btn'>Login/Register</button>
            </Link>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Landing;
