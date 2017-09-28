import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
    this.props.lodgingssearch(e.target.value);
  }

  handleHeaderClick(e) {
    e.preventDefault();
    this.props.fetchLodgings()
    .then(this.setState({ query: '' }))
    .then(this.props.history.push('/'));
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({ query: '' }, () =>
      this.props.fetchLodgings());
  }

  render() {
    let searchBar = <div></div>;

    if (this.props.location.pathname === '/') {
      searchBar = (
        <div className='search-container'>
          <input onChange={ this.handleChange }
                             type='text'
                             placeholder='&#xf002; &nbsp;
                             Search by district!'
                             value={ this.state.query }/>

          <button onClick={ this.handleReset }
                  className='button'>
            Reset
          </button>
        </div>
      );
    }

    return (
      <nav className='navbar'>
        <div className='left-nav'>
          <button onClick={ this.handleHeaderClick }>
            <h1 className='nav-header'>SKYbNb</h1>
          </button>
          { searchBar }
        </div>
        <SessionFormContainer />
      </nav>
    );
  }
}

export default NavBar;
