import React from 'react';

import './nav.sass';

const LandingNav = () => (
  <div className="landing__nav">
    <div className="logo">
      <a href="/">discor</a>
    </div>
    <div className="landing__links">
      <a href="#highlights">Features</a>
      <a href="#demo">How It Works</a>
      <a href="#cta">About</a>
    </div>
  </div>
);

export default LandingNav;
