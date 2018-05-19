import React, { Component } from 'react';
import { Link } from 'found';



class MessagesShow extends Component {
  componentWillMount() {
    this.props.startFetch();
  }

  renderAllMessages(messages) {
    const parsedMessages = JSON.parse(messages);
    return parsedMessages.map((message) => {
      return<li key={message.id}>{message.text} - posted: {Date(message.created_at)} - 
        <Link to={"/messages/"+message.id}>
        See Message Details</Link>
        </li>
    });
  }

  render() {
    const { showMessages, loading, error, createMessage} = this.props;

    if(loading) {
      return <div className="container"><h1>Messages</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    } else {
    return (
      <div className="container">
        <h1>Messages</h1>
        <ul className="list-group">
          {this.renderAllMessages(JSON.stringify(showMessages))}
        </ul>
        <form onSubmit={(e)=> {
          e.preventDefault()
          createMessage(e.target.elements.message.value);
          e.target.elements.message.value = '';
        }}>
          Your message: <input type="text" name="message"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
    } 
  }
}

export default MessagesShow;