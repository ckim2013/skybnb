import { connect } from 'react-redux';
import { fetchLodgings, fetchLodging } from '../../actions/lodging_actions';
import LodgingIndex from './lodging_index';

const mapStateToProps = state => ({
  lodgings: Object.values(state.entities.lodgings)
});

const mapDispatchToProps = dispatch => ({
  fetchLodgings: () => dispatch(fetchLodgings())
});

export default connect(mapStateToProps, mapDispatchToProps)(LodgingIndex);
