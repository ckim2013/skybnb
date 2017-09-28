import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';
import { makeBooking } from '../../actions/booking_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.ui.session.currentUser),
  // currentUser: state.ui.session.currentUser,
  errors: state.ui.errors.bookingErrors
});

const mapDispatchToProps = dispatch => ({
  makeBooking: booking => dispatch(makeBooking(booking)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm));
