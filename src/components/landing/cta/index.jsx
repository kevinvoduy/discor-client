import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import { saveUsernameAction } from '../../../redux/actions/signupAction';
import setLoginStateAction from '../../../redux/actions/authToggleAction';

import './cta.sass';

class CTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      password: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.userSignup = this.userSignup.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  userSignup() {
    const payload = {
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      password: this.state.password,
    };
    axios.post('/api/auth/signup', payload)
      .then(() => {
        // save username to redux
        const { username, firstname, lastname } = this.state;

        console.log('before');
        this.props.saveUsername({username, firstname, lastname});
        console.log('after');

        this.props.setLoginState(true);
        this.setState({ password: '' });
        this.props.redirectHome();
      })
      .catch(() => {
        new Error('Failed to sign up');
      });
  }

  render() {
    return (
      <div className="cta" id="cta">
        <div className="left">
          <div className="cta__words">
            <p id="cta__headline">Join the <span style={{ fontWeight: 500 }}>many users</span><br />from all over the world</p>
            <p id="cta__details">Quisque pharetra et lorem et aliquet. In nec erat at risus blandit ullamcorper. Quisque gravida turpis sit amet fermentum lacinia. Nullam ac posuere quam. Integer vitae nibh elit.</p>
          </div>

          <div className="cta__form">
            <form id="form">
              <label htmlFor="firstname">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  onChange={this.onChangeHandler}
                  className="half"
                  style={{ marginRight: '.4em' }}
                />
              </label>

              <label htmlFor="lastname">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={this.onChangeHandler}
                  className="half"
                />
              </label>

              <label htmlFor="username">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.onChangeHandler}
                  className="full"
                />
              </label>


              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChangeHandler}
                  className="full"
                />
              </label>
            </form>

            <button onClick={this.userSignup}>Sign Up</button>
          </div>
        </div>

        <div className="cta__image">
          <img src="assets/user-bubbles.png" alt="" />
        </div>
      </div>
    );
  }
}

CTA.propTypes = {
  saveUsername: PropTypes.func.isRequired,
  redirectHome: PropTypes.func.isRequired,
  setLoginState: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    username: state.signup.username,
    firstname: state.signup.firstname,
    lastname: state.signup.lastname,
    isLoggedIn: state.isLoggedIn__store.isLoggedIn,
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    saveUsername: saveUsernameAction,
    setLoginState: setLoginStateAction,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(CTA);
