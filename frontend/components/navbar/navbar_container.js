import { connect } from 'react-redux';
import { lodgingssearch } from '../../actions/lodging_search_actions';
import NavBar from './navbar';

const mapDispatchToProps = dispatch => ({
  lodgingssearch: query => dispatch(lodgingssearch(query))
});

export default connect(null, mapDispatchToProps)(NavBar);
