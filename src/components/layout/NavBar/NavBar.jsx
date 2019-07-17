import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul className="navbar">
        <li className="navbar__link">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="navbar__link">
          <Link to="/books">Books</Link>
        </li>
        <li className="navbar__link">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
