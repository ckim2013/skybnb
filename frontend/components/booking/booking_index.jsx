import React from 'react';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    this.props.fetchAllBookings();
  }

  render() {
    console.log('INSIDE RENDER', this.props);
    return (
      <div>NOOB</div>
    );
  }
}

export default BookingIndex;
