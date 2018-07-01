import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import LandingNav from './nav';
import Login from './login';
import Highlights from './highlights';
import Demo from './demo';
import CTA from './cta';
import Footer from './footer';

import './landing.sass';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.redirectHome = this.redirectHome.bind(this);
  }

  redirectHome() {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="landing__page">
        <LandingNav />
        <Login redirectHome={this.redirectHome} />
        <Highlights />
        <Demo />
        <CTA redirectHome={this.redirectHome} />
        <Footer />
      </div>
    );
  }
}

Landing.propTypes = {
  history: PropTypes.object,
};

Landing.defaultProps = {
  history: {},
};

export default withRouter(Landing);