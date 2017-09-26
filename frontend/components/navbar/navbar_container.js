import { connect } from 'react-redux';
import { lodgingssearch } from '../../actions/lodging_search_actions';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';

const mapDispatchToProps = dispatch => ({
  lodgingssearch: query => dispatch(lodgingssearch(query))
});

export default withRouter(connect(null, mapDispatchToProps)(NavBar));
