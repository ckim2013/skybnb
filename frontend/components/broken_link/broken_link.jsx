import React from 'react';

class BrokenLink extends React.Component {
  render() {
    return (
      <div>
        <div>
          You ventured into no man's land!
        </div>
        <button className='button'
                onClick={ () => { this.props.history.push('/explore'); } }>
          Return
        </button>
      </div>
    );
  }
}

export default BrokenLink;
