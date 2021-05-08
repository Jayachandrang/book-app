import React from 'react';
import { NavLink } from 'react-router-dom';
require('./Header.scss');

const Header = () => {
  return (
    <header>
      <h1>BookInfo App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
