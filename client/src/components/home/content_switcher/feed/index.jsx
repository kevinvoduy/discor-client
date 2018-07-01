import React from 'react';
import axios from 'axios';

import CreatePost from './createPost';
import FeedStream from './feedStream';
import News from './news';
import Connections from './connections';

import './feed.sass';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
    };
    this.fetchRandomUsers = this.fetchRandomUsers.bind(this);
  }

  componentDidMount() {
    this.fetchRandomUsers();
  }

  fetchRandomUsers() {
    axios.get('https://randomuser.me/api/?inc=name,login,picture&results=5')
      .then(data => {
        this.setState({
          users: data,
        });
      })
      .catch(err => {
        console.log('Failed to fetch random users', err);
      });
  }

  render() {
    if (this.state.users.data) {
      return (
        <div className="feed">
          <div className="user__posts">
            <CreatePost />
            <FeedStream />
          </div>
          <div className="suggestions">
            <div>
              <News />
              <Connections users={this.state.users.data} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="feed">
          <div className="user__posts">
            <CreatePost />
            <FeedStream />
          </div>
          <div className="suggestions">
            <div>
              <News />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Feed;
