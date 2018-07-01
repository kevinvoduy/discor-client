import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from './nav';
import Links from './sidenav';
import ContentSwitcher from './content_switcher';

import setLoginStateAction from '../../redux/actions/authToggleAction';

import './home.sass';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.setLoginState(false);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="home__page">
        <NavBar />
        <Links />
        <ContentSwitcher />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
  setLoginState: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn__store.isLoggedIn,
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({
    setLoginState: setLoginStateAction,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Home);
