import { connect } from 'react-redux';
import { fetchLodgings } from '../../actions/lodging_actions';
import { updateBounds } from '../../actions/bounds_actions';
import Search from './search';

const mapStateToProps = state => ({
  lodgings: Object.values(state.entities.lodgings),
  loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchLodgings: () => dispatch(fetchLodgings()),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
