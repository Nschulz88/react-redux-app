import React, { Component } from 'react';
import MessagesList from '../containers/MessagesContainer.js';

class MessagesIndex extends Component {
  render() {
    return (
      <div>
        <MessagesList />
      </div>
    );
  }
}


export default MessagesIndex;