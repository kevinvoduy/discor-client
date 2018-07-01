import React from 'react';

import text from './highlights.json';
import './highlights.sass';

const Highlights = () => (
  <div className="highlights" id="highlights">
    <p id="question">What can you do with discor?</p>
    <div className="bullets">
      {
        text.map(bullet => (
          <div className="bullet" key={bullet.url}>
            <img src={bullet.url} alt="" id="header__icon" />
            <p id="header">{bullet.header}</p>
            <p id="text">{bullet.text}</p>
          </div>
        ))
      }
    </div>
  </div>
);

export default Highlights;
