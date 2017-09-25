import { connect } from 'react-redux';
import LodgingShow from './lodging_show';
import { fetchLodging, destroyLodging } from '../../actions/lodging_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.ui.session.currentUser),
  errors: state.ui.errors.lodgingErrors,
  lodging: state.entities.lodgings[state.ui.lodgingDisplay],
  currentUser: state.ui.session.currentUser,
  loading: state.ui.loading.showLoading
});

const mapDispatchToProps = dispatch => ({
  fetchLodging: id => dispatch(fetchLodging(id)),
  destroyLodging: id => dispatch(destroyLodging(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(LodgingShow);
