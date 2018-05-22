import React, { Component } from 'react';


class Message extends Component {
  componentWillMount() {
    this.props.startFetch(this.props.params.id);
  }
  renderMessage(message) {
    const parsedMessage = JSON.parse(message);
      return<div key={parsedMessage.id}>{parsedMessage.text} - posted: {parsedMessage.created_at}</div>
  }
  render() {
    const { showMessage, loading, error } = this.props;
    console.log("THIS . PROPS in Message component", this.props)


    if(loading) {
      return <div className="container"><h1>Message</h1><h3>Loading...</h3></div>      
    } else {
    return (
      <div>
        {this.renderMessage(JSON.stringify(showMessage))}
      </div>
    );
    } 
  }
}

export default Message;