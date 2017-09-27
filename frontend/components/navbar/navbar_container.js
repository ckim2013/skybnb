import { connect } from 'react-redux';
import { lodgingssearch } from '../../actions/lodging_search_actions';
import { fetchLodgings } from '../../actions/lodging_actions';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';

const mapDispatchToProps = dispatch => ({
  lodgingssearch: query => dispatch(lodgingssearch(query)),
  fetchLodgings: () => dispatch(fetchLodgings())
});

export default withRouter(connect(null, mapDispatchToProps)(NavBar));
