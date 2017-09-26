import React from 'react';
import BookingIndexItem from './booking_index';

class BookingIndex extends React.Component {
  componentWillMount() {
    console.log('willmount', this.props);
    this.props.fetchAllBookings();
  }

  render() {
    const { bookings } = this.props;
    return (
      <ul>
        {bookings.map(booking =>
          <BookingIndexItem key={ booking.id }
                            booking={ booking }/>)}
      </ul>
    );
  }
}

export default BookingIndex;
