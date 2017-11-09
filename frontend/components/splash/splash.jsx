import React from 'react';

class Splash extends React.Component {
  redirectToExplore() {
    this.props.history.push('/explore');
  }

  render() {
    console.log(document.width);
    return (
      <div className='splash-container'>
        <button onClick={ this.redirectToExplore.bind(this) }>Explore</button>
      </div>
    );
  }
}

export default Splash;
