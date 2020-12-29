import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Hello from the other page!
      <Link to="/">Go back home</Link>
    </div>
  );
};
