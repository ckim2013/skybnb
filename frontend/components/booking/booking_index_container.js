import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchAllBookings,
         destroyBooking } from '../../actions/booking_actions';

const mapStateToProps = state => ({
  bookings: Object.values(state.entities.bookings)
});

const mapDispatchToProps = dispatch => ({
  fetchAllBookings: () => dispatch(fetchAllBookings()),
  destroyBooking: booking => dispatch(destroyBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
