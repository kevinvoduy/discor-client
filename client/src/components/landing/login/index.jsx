import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'smoothscroll';

import { saveUsernameAction, loginAuth } from '../../../redux/actions/signupAction';
import setLoginStateAction from '../../../redux/actions/authToggleAction';

import './login.sass';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.bypassSignup = this.bypassSignup.bind(this);
    this.login = this.login.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  bypassSignup() {
    // bypass signup
    this.props.redirectHome();
  }

  login() {
    const payload = {
      username: this.state.username,
      password: this.state.password,
    };

    // auth then redirects home
    this.props.loginAuth('api/auth/login', payload)
      .then(res => {
        if (res.loginAuthSuccess === 200) {
          this.props.saveUsername({username: this.state.username, firstname: '', lastname: ''});
          this.props.setLoginState(true);
          this.props.redirectHome();
        }
      })
      .catch(err => {
        console.log('Login errored', err);
      });
  }

  render() {
    return (
      <div className="login__page" >
        <div className="form__container">
          <p id="headline">The whole world<br />in one single App</p>
          <p id="small__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus sodales arcu vel eleifend.</p>
          <form id="signup__form">
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.onChangeHandler}
              />
            </label>

            <br />

            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChangeHandler}
              />
            </label>
          </form>

          <button onClick={this.login}>Login</button>
          <a href="#cta"><button>Sign up</button></a>
          <button onClick={this.bypassSignup}>Skip</button>
        </div>

        <div className="hero__image">
          <img src="/assets/black.png" alt="" />
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  saveUsername: PropTypes.func.isRequired,
  redirectHome: PropTypes.func.isRequired,
  setLoginState: PropTypes.func.isRequired,
  loginAuth: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    username: state.signup.username,
    loginAuthSuccess: state.loginAuthSuccess,
    isLoggedIn: state.isLoggedIn__store.isLoggedIn,
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    saveUsername: saveUsernameAction,
    setLoginState: setLoginStateAction,
    loginAuth: loginAuth,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);
