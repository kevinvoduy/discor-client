import React from 'react';
import { Link } from 'react-router-dom';

import './sidenav.sass';

const Links = () => (
  <div className="links">
    <ul>
      <li>
        <img src='assets/favorite.png' alt="" />
        <Link to="/home" href="/home">Feed</Link>
      </li>
      <li>
        <img src='assets/delivery-man.png' alt="" />
        <Link to="/people" href="/people">People</Link>
      </li>
      <li>
        <img src='assets/email.png' alt="" />
        <Link to="/inbox" href="/inbox">Inbox</Link>
      </li>

      <div className="divider" />

      <li>
        <img src='assets/crown.png' alt="" />
        <Link to="/premium" href="premium">Premium</Link>
      </li>
      <li>
        <img src='assets/interface.png' alt="" />
        <Link to="/settings" href="/settings">Settings</Link>
      </li>

      <div className="divider" />

    </ul>
  </div>
);

export default Links;
