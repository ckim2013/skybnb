import React from 'react';

class Splash extends React.Component {
  redirectToExplore() {
    this.props.history.push('/explore');
  }

  render() {
    return (
      <div>
        <div>
          
        </div>
        <button onClick={ this.redirectToExplore.bind(this) }>Explore</button>
      </div>
    );
  }
}

export default Splash;
