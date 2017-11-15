import React from 'react';

class Splash extends React.Component {
  redirectToExplore() {
    this.props.history.push('/explore');
  }

  componentWillMount() {
    let pressed = [];
    let secretCode = 'chris'
    window.addEventListener('keyup', e => {
      pressed.push(e.key);
      pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
      if (pressed.join('').includes(secretCode)) {
        let func = [sharkify_add, cornify_add][Math.floor(Math.random() * 2)];
        func();
      }
    });
  }

  render() {
    return (
      <div className='splash-container'>
        <div className='splash-background'>
        </div>
        <div className='splash-content'>
          <h1>SKYBnB</h1>
          <div>Come stay at thousands of lodgings around the world. Or host your own.</div>
          <p>Type 'chris' at your own risk...</p>
          <button onClick={ this.redirectToExplore.bind(this) }>Explore</button>
        </div>
      </div>
    );
  }
}

export default Splash;
