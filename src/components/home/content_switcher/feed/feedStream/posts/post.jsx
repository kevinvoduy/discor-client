import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Comment from '../comments/comments';
import './post.sass';

moment.updateLocale('en', {
  relativeTime : {
      past:   '%s ago',
      s  : '%ds',
      ss : '%ds',
      m:  '1m',
      mm: '%dm',
      h:  '1h',
      hh: '%dh',
      d:  '1d',
      dd: '%dd',
      M:  '1m',
      MM: '%dm',
      y:  '1y',
      yy: '%dy'
  }
});

const Post = props => {
  if (props.imageURL) {
    return (
      <div className="post">
        <div className="content">
          <img src={props.userImg} alt="" id="user__img" />
          <h4 id="owner">{props.owner}</h4>
          <p id="createdAt">{moment(props.createdAt, 'YYYY-MM-DD h:mm:ss Z').fromNow(true)}</p>
          <img src={props.imageURL} alt="" id="upload__img" />
          <p id="content">{props.content}</p>
        </div>

        <div className="comments">
          {
            props.comments.map(comment =>(
              <Comment
                key={comment._id}
                owner={comment.owner}
                userImg={comment.userImg}
                comment={comment.comment}
                createdAt={comment.createdAt}
              />
            ))
          }
        </div>

        <div className="meta">
          <div className="buttons">
            <img src="assets/heart.png" alt="" id="like" />
            <p>Like</p>
            <img src="assets/communication.png" alt="" id="comment" />
            <p>Reply</p>
          </div>
          <div className="like__count" />
        </div>
      </div>
    );
  }
  return (
    <div className="post">
      <div className="content">
        <img src={props.userImg} alt="" id="user__img" />
        <h4 id="owner">{props.owner}</h4>
        <p id="createdAt">{moment(props.createdAt, 'YYYY-MM-DD h:mm:ss Z').fromNow(true)}</p>
        <p id="content">{props.content}</p>
      </div>

      <div className="comments">
        {
          props.comments.map(comment =>(
            <Comment
              key={comment._id}
              owner={comment.owner}
              userImg={comment.userImg}
              comment={comment.comment}
              createdAt={comment.createdAt}
            />
          ))
        }
      </div>

      <div className="meta">
        <div className="buttons">
          <img src="assets/heart.png" alt="" id="like" />
          <p>Like</p>
          <img src="assets/communication.png" alt="" id="comment" style={{ top: '5px'}} />
          <p>Reply</p>
        </div>
        <div className="like__count" />
      </div>
    </div>
  );
};

Post.propTypes = {
  owner: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  content: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  userImg: PropTypes.string,
};

Post.defaultProps = {
  userImg: ''
};

Post.defaultProps = {
  imageURL: '',
};

export default Post;
