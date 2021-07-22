import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navigation() {
  return (
    <Link to="/signup">Sign up</Link>
  );
}

export default withRouter(Navigation);
