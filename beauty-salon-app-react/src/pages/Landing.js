import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing-page'>
      <section className='landing-page-container'>
        <section className='landing-page-container-children'>
          <section>
            <h2 className='landing-page-logo'>Salon Portal</h2>
            <p>
              Where salon professionals come to do all the things with the stuff
              and the hair.
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
