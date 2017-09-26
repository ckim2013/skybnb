import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    console.log('inside navbar constructor');
    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <nav className='navbar'>
        <div>
          <Link to='/'>
            <h1 className='nav-header'>SKYbNb</h1>
          </Link>
          <input onChange={ this.handleChange } type='text' />
        </div>
        <SessionFormContainer />
      </nav>
    );
  }
}

export default NavBar;
