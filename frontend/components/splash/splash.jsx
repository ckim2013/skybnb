import React from 'react';

class Splash extends React.Component {
  redirectToExplore() {
    this.props.history.push('/explore');
  }

  render() {
    console.log(document.width);
    return (
      <div>
        <div className='splash-background'>
        </div>

        <div className='splash-content'>
          <h1>SKYBnB</h1>
          <p>Come stay at thousands of lodgings around the world. Or host your own.</p>
          <button onClick={ this.redirectToExplore.bind(this) }>Explore</button>
        </div>
      </div>
    );
  }
}

export default Splash;
