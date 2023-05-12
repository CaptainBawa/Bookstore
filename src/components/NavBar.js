import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <h1>
      <Link to="/">BookStore CMS</Link>
    </h1>
    <ul>
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
