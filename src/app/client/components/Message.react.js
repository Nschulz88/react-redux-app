import React, { Component } from 'react';


class Message extends Component {
  componentWillMount() {
    this.props.startFetch(this.props.params.id);
  }

  render() {
    const { showMessage, loading, error } = this.props;

    if(loading) {
      return <div className="container"><h1>Message</h1><h3>Loading...</h3></div>      
    } else {
    return (
      <div>
      <div>Message id: {showMessage.message.id}</div>
      <div>Message text: {showMessage.message.text}</div>
    </div>
    );
    } 
  }
}

export default Message;