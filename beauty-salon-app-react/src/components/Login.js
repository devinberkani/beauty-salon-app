import React, { useEffect, useRef, useState } from 'react';

function Login() {
  const inputRef = useRef(null);

  useEffect(() => {
    // focus the input element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <form action='action_page.php' method='post'>
        <div>
          <label htmlFor='uname'>
            <b>Username</b>
          </label>
          <input
            ref={inputRef}
            type='text'
            placeholder='Enter Username'
            name='uname'
            required
          />
          <div>
            <label htmlFor='psw'>
              <b>Password</b>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='psw'
              required
            />
          </div>
          <button type='button'>Cancel</button>
          <button type='submit'>Login</button>
        </div>
        <div>
          <span>
            Forgot <a href='#'>password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
