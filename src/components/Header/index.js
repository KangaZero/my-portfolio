import React from 'react';
import { Link } from 'react-router-dom';

// import Auth from '../../../utils/auth';

const Header = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Tech Thoughts</h1>
          </Link>
          <p className="m-0">Get into the mind of a programmer.</p>
        </div>
        <div>
        </div>
      </div>
    </header>
  );
};

export default Header;
