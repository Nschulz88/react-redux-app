
import { connect } from 'react-redux'
import { fetchMessages, fetchMessagesSuccess } from '../actions/messages';
import { fetchmessagesMiddleware } from '../reducers/messagesReducer';


import ShowMessages from '../components/MessagesShow.react'


const mapStateToProps = (state) => {
  console.log('Redux App State', state);
  return { 
    showMessages: state.messages.showMessages,
    loading: state.messages.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    startFetch: () => {
      dispatch({type: 'FETCH_MESSAGES'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMessages);