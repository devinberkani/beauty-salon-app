import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton';

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
            <LoginButton />
          </section>
        </section>
      </section>
    </div>
  );
};

export default Landing;
