
import { connect } from 'react-redux'
import { fetchMessages, fetchMessagesSuccess } from '../actions/messages';
// import ShowMessages from '../components/MessagesShow';
import ShowMessages from '../components/MessagesShow.react'


const mapStateToProps = (state) => {
  console.log('Redux App State', state);
  return { 
    showMessages: state.messages.showMessages
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: () => {
      dispatch({type: 'FETCH_MESSAGES'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMessages);