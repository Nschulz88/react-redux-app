
import { connect } from 'react-redux'
import Message from '../components/Message.react'
import { fetchonemessageThunk } from '../reducers/messagesReducer';



const mapStateToProps = (state, props) => {

  return { 
    showMessage: state.messages.showMessages.filter((message) => message.id === props.params.id),
    loading: state.messages.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    startFetch: (id) => {
      dispatch(fetchonemessageThunk(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);