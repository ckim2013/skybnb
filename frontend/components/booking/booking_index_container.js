import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchAllBookings,
         destroyBooking } from '../../actions/booking_actions';

const mapStateToProps = state => ({
  bookings: Object.values(state.entities.bookings),
  loading: state.ui.loading.indexLoading,
  errors: state.ui.errors.bookingErrors
});

const mapDispatchToProps = dispatch => ({
  fetchAllBookings: () => dispatch(fetchAllBookings()),
  destroyBooking: booking => dispatch(destroyBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
