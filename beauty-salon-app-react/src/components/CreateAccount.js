import React, { useState } from 'react';
import CreateAccountForm from './CreateAccountForm';
import NavbarLoggedOut from './NavbarLoggedOut';

function CreateAccount() {
  //setting initial user object
  const adminUser = {
    name: '',
    email: '',
    password: '',
  };

  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  //catch if details are incorrect
  const [error, setError] = useState('');

  //takes details from login form
  const CreateAccount = (details) => {
    console.log(details);

    if (details.name != '' && details.email != '' && details.password != '') {
      console.log('Account Created');
      alert(
        `Congratulations, ${details.name}! Your confirmation email has been sent to ${details.email}, your password has been set to ${details.password}.`
      );
      console.log('Logged In');

      //set user details to pass conditionals in jsx below after account created
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log('Please fill out all fields');
      setError('Please fill out all fields');
    }
  };

  //logout function
  const Logout = () => {
    console.log('Logged out');

    //set user back to default value after logged out
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
          <CreateAccountForm CreateAccount={CreateAccount} error={error} />
        </div>
      )}
    </div>
  );
}

export default CreateAccount;
