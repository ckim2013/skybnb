import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className='navbar'>
    <Link to='/'>
      <h1 className='nav-header'>SKYbNb</h1>
    </Link>
    <SessionFormContainer />
  </nav>
);

export default NavBar;
