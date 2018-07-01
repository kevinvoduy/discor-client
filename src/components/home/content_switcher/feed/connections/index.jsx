import React from 'react';
import PropTypes from 'prop-types';

import './connections.sass';

const Connections = (props) => {
  return (
    <div className="connections">
      <h3>People You May Know</h3>
      <div className="suggested__people">
        {
          props.users.results.map(user => (
            <div className="person" key={user.login.uuid}>
              <img src={user.picture.large} alt="" id="connection__img" />
              <div className="info">
                <div className="user__info">
                  <p id="name">{user.name.first + ' ' + user.name.last}</p>
                  <p id="job">{user.login.username}</p>
                </div>
                <img src="/assets/link.png" alt="" id="common__icon" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

Connections.propTypes = {
  users: PropTypes.object,
};

Connections.defaultProps = {
  users: {},
};

export default Connections;