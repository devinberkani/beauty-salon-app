//Login logic

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import NavbarLoggedOut from './NavbarLoggedOut';

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
      details.name === adminUser.name &&
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
      console.log('Login information does not match');
      setError('Login information does not match');
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
    //set error back to default value after logged out
    setError('');
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
        <div>
          <NavbarLoggedOut />
          <LoginForm Login={Login} error={error} />
        </div>
      )}
    </div>
  );
}

export default Login;
