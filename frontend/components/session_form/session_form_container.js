import { connect } from 'react-redux';
import { login, signup, logout } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.ui.session.currentUser),
  errors: state.ui.errors.sessionErrors,
  currentUser: state.ui.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

const SessionFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default SessionFormContainer;
