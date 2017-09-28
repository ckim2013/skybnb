import { connect } from 'react-redux';
import LodgingShow from './lodging_show';
import { fetchLodging, destroyLodging } from '../../actions/lodging_actions';
import { selectLodgingReviews } from '../../reducers/selectors';

const mapStateToProps = state => {
  const lodging = state.entities.lodgings[state.ui.lodgingDisplay];
  return (
    {
      lodging,
      loggedIn: Boolean(state.ui.session.currentUser),
      errors: state.ui.errors.lodgingErrors,
      currentUser: state.ui.session.currentUser,
      loading: state.ui.loading.showLoading,
      reviews: selectLodgingReviews(state, lodging)
    }
  );
};

const mapDispatchToProps = dispatch => ({
  fetchLodging: id => dispatch(fetchLodging(id)),
  destroyLodging: id => dispatch(destroyLodging(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(LodgingShow);
