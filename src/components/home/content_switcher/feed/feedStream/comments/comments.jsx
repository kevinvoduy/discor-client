import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './comments.sass';

const Comment = props => (
  <div className="comment">
    <img src={props.userImg} alt="" id="imageURL" />
    <div className="name__comment">
      <p><strong>{props.owner}</strong></p>
      <p>{props.comment}</p>
    </div>
    <p id="createdAt">{moment(props.createdAt, 'YYYY-MM-DD h:mm:ss Z').fromNow(true)}</p>
  </div>
);

Comment.propTypes = {
  owner: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,
};

export default Comment;
