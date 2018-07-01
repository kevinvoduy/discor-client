import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import './messages.sass';
import messages from './messages.json';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: messages,
    };
    this.reply = this.reply.bind(this);
    this.showMore = this.showMore.bind(this);
    this.showUnreadMessages = this.showUnreadMessages.bind(this);
    this.setAsNew = this.setAsNew.bind(this);
  }

  setAsNew(status) {
    if (status === 'New' ) return 'message new__message';
    if (status === 'Replied') return 'message replied__message';
    else return 'message';
  }

  reply() {
    console.log('hello');
  }


  showMore() {
    console.log('props', this.props);
  }

  showUnreadMessages() {
    if (messages.filter(i => i.status == 'New').length > 0) {
      return '(' + (messages.filter(i=>i.status === 'New')).length + ')';
    } else {
     return '';
    }
  }

  render() {
    return (
      <div className="inbox">
        <div className="header">
          <div className="inbox__heading">
            <h3>Inbox {this.showUnreadMessages()}</h3>
          </div>
          <div className="new__message">
            <button onClick={this.showMore}>+ New Message</button>
          </div>
        </div>

        <div className="messages">
          {
            this.state.messages.map(message => {
              return (
                <div className={this.setAsNew(message.status)} key={message.id}>

                  <Link to={{ pathname: '/chat', state:{ messageProps: {message}, read: false }}} href="/chat" >
                    <div className="icon">
                      <img src={message.userImg} alt="ico" />
                    </div>
                  </Link>

                  <Link to={{ pathname: '/chat', state:{ messageProps: {message} }}} href="/chat" >
                    <div className="name">
                      <p>{message.name}</p>
                      <p style={{ color: 'silver', fontSize: '14px' }}>{message.status}</p>
                    </div>
                  </Link>

                  <Link to={{ pathname: '/chat', state:{ messageProps: {message} }}} href="/chat" >
                    <div className="details">
                      <p>{message.subject}</p>
                      <p style={{ color: 'silver', fontSize: '14px' }}>{(message.content.length <= 70) ? message.content : message.content.slice(0, 70)+ '...' }</p>
                    </div>
                  </Link>

                  <Link to={{ pathname: '/chat', state:{ messageProps: {message} }}} href="/chat" >
                    <div className="meta">
                      <p>{moment(message.createdAt, 'YYYY-MM-DD h:mm:ss Z').fromNow()}</p>
                    </div>
                  </Link>

                  <div className="show__more">
                    <img src="assets/more.png" alt="ico" />
                  </div>

                </div>
              );
            })
          }
        </div>

        <div className="pages">
          <div className="page__text">
            <p>Showing 0-{messages.length} out of {messages.length}</p>
          </div>
          <div className="pagenation">
            <a href="/inbox">1</a>
            <a href="/inbox">2</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
