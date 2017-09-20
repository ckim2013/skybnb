import React from 'react';
import ReactModal from 'react-modal';

const SIGNUP_GREETING = "Welcome! Bienvenido! 欢迎! ようこそ! أهلا بك!";
const LOGIN_GREETING = "Welcome back! Bienvenido! 欢迎! ようこそ! أهلا بعودتكك!";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      modalIsOpen: false,
      formType: null
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(action) {
    return e => {
      e.preventDefault();
      return action(this.state);
    };
  }

  handleClick() {
    this.props.logout();
  }

  toggleModal(formType = null) {
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      modalIsOpen: !this.state.modalIsOpen,
      formType
    });
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div>
          <h2>Aloha {this.props.currentUser.first_name}!</h2>
          <button onClick={this.handleClick}>Sign Out</button>
        </div>
      );
    }

    // Default is logging in
    let greeting = LOGIN_GREETING;
    let nameFields = <div></div>;
    let action = this.props.login;

    if (this.state.formType === 'Sign Up') {
      greeting = SIGNUP_GREETING;
      nameFields = (
        <div>
          <input
            placeholder='First Name'
            value={this.state.first_name}
            onChange={this.update('first_name')}
            type='text' />
          <br />
          <input
            placeholder='Last Name'
            value={this.state.last_name}
            onChange={this.update('last_name')}
            type='text'/>
        </div>
      );
      action = this.props.signup;
    }

    return (
      <div>
        <button onClick={() => this.toggleModal("Sign Up")}>Sign Up</button>
        <button onClick={() => this.toggleModal("Log In")}>Log In</button>


        <ReactModal
          isOpen={this.state.modalIsOpen}
          contentLabel='Session Form'>

          <form onSubmit={this.handleSubmit(action)}>
            <button onClick={() => this.toggleModal()}>X</button>
            <h2>{greeting}</h2>
            {nameFields}
              <input
                placeholder='Email'
                value={this.state.email}
                onChange={this.update('email')}
                type='text' />
              <br />
              <input
                placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}
                type='password'/>
              <br />
              <input type='submit' value={this.state.formType}/>
          </form>
        </ReactModal>

      </div>
    );
  }
}

export default SessionForm;
