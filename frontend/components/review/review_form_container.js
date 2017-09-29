import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { fetchLodging } from '../../actions/lodging_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.ui.session.currentUser),
  errors: state.ui.errors.reviewErrors,
  currentUser: state.ui.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  fetchLodging: id => dispatch(fetchLodging(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
