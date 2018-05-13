import React, { Component } from 'react';
import { Link } from 'react-router';

class MessagesShow extends Component {
  componentWillMount() {
    console.log("LOGGING this.props:", this.props)
    this.props.fetchMessages();
  }

  renderAllMessages(messages) {
    console.log("in renderAllmessages logging messages", messages)
    return messages.map((message) => {
      return (
        <ul>
          <li>
            {message.id}
          </li>
          <li>
            {message.text}
          </li>
          <li>
            {message.created_at}
          </li>
        </ul>
      );
    });
  }

  render() {
    const { messages, loading, error } = this.props;

    if(loading) {
      return <div className="container"><h1>Messages</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="container">
        <h1>Messages</h1>
        <ul className="list-group">
          {this.renderAllMessages(messages)}
        </ul>
      </div>
    );
  }
}

export default MessagesShow;