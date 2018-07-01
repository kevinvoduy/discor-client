import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';

import Profile from './profile';
import './chat.sass';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [this.props.location.state.messageProps.message],
      message: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.messageStatus = this.messageStatus.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    const { socket } = this.props;

    // sets message state to READ
    this.messageStatus();

    // est. socket connection
    socket.on('connect', () => {
      socket.emit('client.ready', socket.id);
    });

    // appends messages to chat
    socket.on('chat.broadcast.message', message => {
      this.setState({
        messages: [ ...this.state.messages, { name: message.name, content: message.content }],
      });
    });
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  messageStatus() {
    if (this.props.location.state.messageProps.message.status === 'New') {
      this.props.location.state.messageProps.message.status = 'Read';
    }
  }

  sendMessage(e) {
    e.preventDefault();
    if (this.state.message === '') return;
    const { socket } = this.props;

    // emit message to everyone else
    socket.emit('chat.message', { name: this.props.firstname + ' ' + this.props.lastname, content: this.state.message });

    // resets
    this.setState({ message: '' });
    document.getElementById('form').reset();

    // scroll to bottom
    const scroll = document.getElementById('chat');
    scroll.scrollTop = scroll.scrollHeight - scroll.clientHeight;
  }

  render() {
    const { subject } = this.props.location.state.messageProps.message;

    return (
      <div className="main">
        <div className="chat" id="chat">

          <div className="chat__header">
            <Link to="/inbox" href="/inbox"><button onClick={this.goBack}>←</button></Link>
            <h3>{subject}</h3>
          </div>

          <div className="chat__room">
            <div className="message__area">
              {
                this.state.messages.map(message => {
                  if (message.name === this.props.firstname + ' ' + this.props.lastname) {
                    return (

                      <div className="message my__message" key={Date.now}>
                        <div className="message__header">
                          <h5 style={{ marginRight: '4em' }}>{message.name}</h5>
                          <h5>{moment(message.createdAt).format('h:mm a')}</h5>
                        </div>
                        <p>{message.content}</p>
                      </div>

                    );
                  }
                  else {
                    return (

                      <div className="message other__message" key={message.id}>

                        <div className="message__header">
                          <h5 style={{ marginRight: '4em' }}>{message.name}</h5>
                          <h5>{moment(message.createdAt).format('h:mm a')}</h5>
                        </div>
                        <p>{message.content}</p>
                      </div>

                    );
                  }
                })
              }
            </div>

            <div className="submit__message">
              <form id="form" autoComplete='off'>
                <input
                  type="text"
                  name="message"
                  id="input"
                  placeholder="Write something..."
                  onChange={this.onChangeHandler}
                />
                <input
                  type="submit"
                  value="send"
                  id="submit"
                  onClick={this.sendMessage}
                />
              </form>
            </div>

          </div>
        </div>

        <div className="profile">
          <Profile message={this.props.location.state.messageProps.message} />
        </div>
      </div>
    );
  }
}

Chat.propTypes =  {
  socket: PropTypes.object.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  messageProps: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    username: state.signup.username,
    firstname: state.signup.firstname,
    lastname: state.signup.lastname,
  };
};

export default withRouter(connect(mapStateToProps)(Chat));
