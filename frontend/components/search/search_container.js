import { connect } from 'react-redux';
import { fetchLodgings } from '../../actions/lodging_actions';
import Search from './search';

const mapStateToProps = state => ({
  lodgings: Object.values(state.entities.lodgings),
  loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchLodgings: () => dispatch(fetchLodgings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
