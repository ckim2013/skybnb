import React from 'react';
import ReactModal from 'react-modal';

const SIGNUP_GREETING = 'Welcome! Bienvenido! 欢迎! 환영! स्वागत हे! ようこそ! أهلا بك!';
const SIGNUP_FOOTER = 'Already have an account? Log in ';
const LOGIN_GREETING = 'Welcome back! Bienvenido! 欢迎! 환영! स्वागत हे! ようこそ! أهلا بعودتكك!';
const LOGIN_FOOTER = 'Need an account? Sign up ';

const GUEST = {
  email: 'guest@gmail.com',
  password: 'password'
};

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '560px',
    width                 : '500px'
  }
};

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      modalIsOpen: false,
      formType: null,
      errors: []
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.toggleWithinModal = this.toggleWithinModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({errors: nextProps.errors});
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(action) {
    return e => {
      e.preventDefault();
      return action(this.state);
    };
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login(GUEST);
  }

  handleClick() {
    this.props.logout().then(this.setState(
      {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        modalIsOpen: false,
        formType: null,
        errors: []
      }
    ));
  }

  toggleModal(formType = null) {
    console.log("normal toggle");
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      modalIsOpen: !this.state.modalIsOpen,
      formType,
      errors: []
    });
  }

  toggleWithinModal(formType = null) {
    console.log("inside toggle within modal");
    console.log(formType);
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      modalIsOpen: true,
      formType: formType === 'Log In' ? 'Sign Up' : 'Log In',
      errors: []
    });
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className='right-nav'>
          <h2>Aloha { this.props.currentUser.first_name }!</h2>
          <button
            onClick={ this.handleClick }
            className='button'>Sign Out</button>
        </div>
      );
    }

    // Default is logging in
    let greeting = LOGIN_GREETING;
    let footer = LOGIN_FOOTER;
    let nameFields = <div></div>;
    let action = this.props.login;

    if (this.state.formType === 'Sign Up') {
      greeting = SIGNUP_GREETING;
      footer = SIGNUP_FOOTER;
      nameFields = (
        <div>
          <input
            placeholder='First Name'
            value={ this.state.first_name }
            onChange={this.update('first_name')}
            type='text' />
          <br />
          <br />
          <input
            placeholder='Last Name'
            value={ this.state.last_name }
            onChange={this.update('last_name')}
            type='text' />
        </div>
      );
      action = this.props.signup;
    }

    return (
      <div>
        <div className='right-nav'>
          <button
            onClick={() => this.toggleModal("Sign Up")}
            className='button'>Sign Up</button>
          <button
            onClick={() => this.toggleModal("Log In")}
            className='button'>Log In</button>
          <button
            onClick={this.handleGuestLogin}
            className='button'>Guest Login</button>
        </div>

        <ReactModal
          isOpen={this.state.modalIsOpen}
          contentLabel='Session Form'
          style={customStyles}>
          <button
            onClick={ () => this.toggleModal() }
            className='x-button'>X</button>
          <div className='session-form'>
            <form onSubmit={ this.handleSubmit(action) }>
              <h2>{ greeting }</h2>
              <ul>
                {this.state.errors.map((error, i) => <li key={ i }>{ error }</li>)}
              </ul>
              <br /><br />
              { nameFields }
              <br />
              <input
                placeholder='Email'
                value={ this.state.email }
                onChange={ this.update('email') }
                type='text' />
              <br />
              <input
                placeholder='Password'
                value={ this.state.password }
                onChange={ this.update('password') }
                type='password' />
              <br />
              <input
                type='submit'
                value={ this.state.formType } />
              <br />
            </form>
            <footer>{footer}
              <a
                onClick={() => this.toggleWithinModal(this.state.formType)}
                className='session-footer-link'>here!</a>
            </footer>
          </div>
        </ReactModal>

      </div>
    );
  }
}

export default SessionForm;
