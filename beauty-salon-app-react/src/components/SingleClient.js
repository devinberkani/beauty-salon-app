import React from 'react';

const SingleClient = ({ name }) => {
  return (
    <div>
      {name.firstName} {name.lastName}
    </div>
  );
};

export default SingleClient;
