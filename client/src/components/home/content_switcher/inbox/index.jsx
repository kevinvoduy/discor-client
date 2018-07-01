import React from 'react';
import io from 'socket.io-client';
import { Switch, Route } from 'react-router-dom';

import Messages from './messages/messages';
import Chat from './chat/chat';

class Inbox extends React.Component {
  constructor() {
    super();
    this.state = {
      socket: null,
    };
  }

  componentWillMount() {
    const socket = io('http://localhost:3033');
    this.setState({ socket: socket });
  }


  render() {
    return (
      <Switch>
        <Route path="/chat" render={() => <Chat socket={this.state.socket} />} />
        <Route path="/inbox" component={Messages} />
      </Switch>
    );
  }
}


export default Inbox;