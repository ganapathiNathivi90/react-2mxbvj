import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const menuUi = {
    color: '#000',
    textDecoration: 'none',
    padding: '10px',
    fontFamily: 'Arial',
  };
  return (
    <div>
      <nav className="nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/resource">
          Resource
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
