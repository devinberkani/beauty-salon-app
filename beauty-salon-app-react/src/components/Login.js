//Login logic

import React, { useState } from 'react';
import LoginForm from './LoginForm';

function Login() {
  //test login information
  const adminUser = {
    name: 'Devin',
    email: 'admin@admin.com',
    password: 'admin123',
  };

  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  //catch if details are incorrect
  const [error, setError] = useState('');

  //takes details from login form
  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log('Logged in');

      //set user details to pass login conditionals
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log('Details do not match');
      setError('Username and password do not match');
    }
  };

  //logout function
  const Logout = () => {
    console.log('Logged out');

    //set user back to default value
    setUser({
      name: '',
      email: '',
    });
  };

  return (
    <div>
      {/* conditions for being logged in */}
      {user.email != '' ? (
        <div>
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;
