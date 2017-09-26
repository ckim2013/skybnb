import React from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
  componentWillMount() {
    this.props.fetchAllBookings();
  }

  render() {
    if (loading) return <div></div>;

    const { bookings , loading, destroyBooking, errors } = this.props;

    return (
      <div className='booking-index'>
        <h1>Your future trips</h1>
        <div className='booking-index-item-container'>
          {bookings.map(booking =>
            <BookingIndexItem key={ booking.id }
              booking={ booking }
              destroyBooking={ destroyBooking }/>)}
        </div>
      </div>
    );
  }
}

export default BookingIndex;
