import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.delayTimer;
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
    clearTimeout(this.delayTimer);
    this.delayTimer = setTimeout(() => {
      this.props.lodgingssearch(this.state.query);
    }, 500);
  }

  handleHeaderClick(e) {
    e.preventDefault();
    this.props.fetchLodgings()
    .then(this.setState({ query: '' }))
    .then(this.props.history.push('/explore'));
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({ query: '' }, () =>
      this.props.fetchLodgings());
  }

  render() {
    let searchBar = <div></div>;

    if (this.props.location.pathname === '/explore') {
      searchBar = (
        <div className='search-container'>
          <input onChange={ this.handleChange }
                             type='text'
                             placeholder='&#xf002; &nbsp;
                             Search by district or neighorhood'
                             value={ this.state.query }/>

          <button onClick={ this.handleReset }
                  className='button'>
            Clear
          </button>
        </div>
      );
    }

    return (
      <nav className='navbar'>
        <div className='left-nav'>
          <button onClick={ this.handleHeaderClick }
                  className='logo-button'>
            <Image publicId='lodgings/favicon.png'
                   cloudName='skybnb'>
              <Transformation height='50' width='50' crop='scale'/>
            </Image>
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
