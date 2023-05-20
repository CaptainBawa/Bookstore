import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="panel-nav">
    <ul className="nav-ul">
      <h1>
        <Link to="/" className="header">BookStore CMS</Link>
      </h1>
      <li>
        <Link to="/" className="nav-link">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories" className="nav-link">CATEGORIES</Link>
      </li>
      <li className="head">
        <AccountCircleIcon style={{ fontSize: '3em', color: 'blue' }} />
      </li>
    </ul>
  </nav>
);

export default Navigation;
