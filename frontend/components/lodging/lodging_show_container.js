import { connect } from 'react-redux';
import LodgingShow from './lodging_show';
//
const mapStateToProps = state => ({
  loggedIn: Boolean(state.ui.session.currentUser),
  errors: state.ui.errors.lodgingErrors,
  lodging: state.entities.lodgings[state.ui.lodging]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LodgingShow);
