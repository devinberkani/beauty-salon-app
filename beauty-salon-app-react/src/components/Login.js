import React, { useEffect, useRef } from 'react';

function Login() {
  const inputRef = useRef(null);

  useEffect(() => {
    // focus the input element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username </label>
        <input ref={inputRef} type='text' />
      </div>
      <div>
        <label>Password </label>
        <input type='text' />
      </div>
    </div>
  );
}

export default Login;
