//Login form

import React, { useState } from 'react';

function LoginForm({ Login, error }) {
  //details to be sent to Login function
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    //calls submitHandler on submit
    <form onSubmit={submitHandler}>
      <div className='form-inner'>
        <h2>Login</h2>
        {error != '' ? <div className='error'>{error}</div> : ''}
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <input type='submit' value='LOGIN' />
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
