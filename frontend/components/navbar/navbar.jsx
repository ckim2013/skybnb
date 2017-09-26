import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
    this.props.lodgingssearch(e.target.value);
  }

  render() {
    console.log('inside nav', this.props);
    let searchBar = <div></div>;

    if (this.props.location.pathname === '/') {
      searchBar = <input onChange={ this.handleChange }
                         type='text'
                         placeholder='Search for any street, city, or country!'/>;
    }

    return (
      <nav className='navbar'>
        <div className='left-nav'>
          <Link to='/'>
            <h1 className='nav-header'>SKYbNb</h1>
          </Link>
          { searchBar }
        </div>
        <SessionFormContainer />
      </nav>
    );
  }
}

export default NavBar;
