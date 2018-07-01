import React from 'react';
import PropTypes from 'prop-types';

import './profile.sass';

const Profile = (props) => (
  <div className="profile">
    <div className="user__info">
      <h1>Profile</h1>
      <img src={props.message.userImg} alt='' id='user__img' />
      <h5>{props.message.name}</h5>
      <p>robertatimms@gmail.com</p>
      <p>+1 31 217 8736</p>

      <div className="contact__buttons">
        <img src="/assets/config.png" alt="phone" id="icon" />
        <img src="/assets/communication.png" alt="email" id="icon" />
      </div>
    </div>

    <div className="images">
      <h5>Shared Images</h5>
      <div className="shared__images">
        <div className="column left">
          <img src="https://www.w3schools.com/w3images/rocks.jpg" alt="" id="shared__image" />
          <img src="https://www.quackit.com/pix/samples/24m.jpg" alt="" id="shared__image" />
          <img src="https://www.w3schools.com/w3images/rocks.jpg" alt="" id="shared__image" />
          <img src="https://www.quackit.com/pix/samples/24m.jpg" alt="" id="shared__image" />
        </div>
        <div className="column right">
          <img src="https://www.quackit.com/pix/samples/24m.jpg" alt="" id="shared__image" />
          <img src="https://www.w3schools.com/w3images/rocks.jpg" alt="" id="shared__image" />
          <img src="https://www.quackit.com/pix/samples/24m.jpg" alt="" id="shared__image" />
          <img src="https://www.w3schools.com/w3images/rocks.jpg" alt="" id="shared__image" />
        </div>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Profile;
