import { connect } from 'react-redux';
import { lodgingsearch } from '../../actions/lodging_search_actions';
import NavBar from './navbar';

const mapDispatchToProps = dispatch => ({
  lodgingsearch: query => dispatch(lodgingsearch(query))
});

export default connect(null, mapDispatchToProps)(NavBar);
