import React, { Component } from 'react';
// import { Link } from 'react-router';



class MessagesShow extends Component {
  componentWillMount() {
    console.log("LOGGING this.props:", this.props)
    this.props.startFetch();
  }

  renderAllMessages(messages) {
    const parsedMessages = JSON.parse(messages);
    console.log("in renderAllmessages logging messages", parsedMessages);
    return parsedMessages.map((message) => {
      return<li>{message.text}</li>
    });
  }

  render() {
    const { showMessages, loading, error } = this.props;

    if(loading) {
      return <div className="container"><h1>Messages</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    } else {
    return (
      <div className="container">
        <h1>Messages</h1>
        <ol className="list-group">
          {this.renderAllMessages(JSON.stringify(showMessages))}
        </ol>
      </div>
    );
    } 
  }
}

export default MessagesShow;