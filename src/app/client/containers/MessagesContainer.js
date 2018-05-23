
import { connect } from 'react-redux'
import MessagesShow from '../components/MessagesShow.react'
import {fetchMessagesThunk, postMessageThunk, deleteMessageThunk} from '../reducers/messagesReducer';


const mapStateToProps = (state) => {
  return { 
    showMessages: state.messages.showMessages,
    loading: state.messages.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    startFetch: () => {
      dispatch(fetchMessagesThunk)
    },
    createMessage: (text) => {
      dispatch(postMessageThunk(text));
    },
    deleteMessage: (id) => {
      dispatch(deleteMessageThunk(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesShow);