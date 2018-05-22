import axios from 'axios';
const ROOT_URL = 'https://natalie-test-autotelic.herokuapp.com';
const MESSAGES_URL = `${ROOT_URL}/messages/`;

const messagesReducer = (state = {loading: true, showMessages: []}, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGES': {
      return {...state, loading: true}
    }
    case "MESSAGES_SUCCESS" : {
    return {showMessages: action.messages}
    }
    case "FETCH_MESSAGE" : {
      console.log('in FETCH_MESSAGE I AM LOGGING action ---------------------', action)
    return {...state, loading: true}
    }
    case "MESSAGE_SUCCESS" : {
      console.log('in MESSAGES SUCCESS I AM LOGGING action!!!!!!!!........', action)
      return {showMessages: action.message}
    }
    case "DELETE_MESSAGE" : {
      return {showMessages: action.messages }
    }
    case "DELETE_SUCCESS": {
      return {showMessages: state.showMessages.filter(message => message.id !== action.id)}
    }
    case "POST_SUCCESS" : {
      return {showMessages: [...state.showMessages, action.message]}
    }
    default: return state
  }
}

const fetchMessagesThunk = (dispatch) => {
  dispatch({type: 'FETCH_MESSAGES'});
  const request = axios({
    method: 'get',
    url: MESSAGES_URL,
    headers: []
  });
  request.then(response => {
    dispatch({type: 'MESSAGES_SUCCESS', messages: response.data.results})
  });
}

const fetchonemessageThunk = id => (dispatch) => {
  dispatch({type: 'FETCH_MESSAGE'})
    const request = axios({
      method: 'get',
      url: MESSAGES_URL+id,
      headers: []
    });
    request.then(response => {
      dispatch({type: 'MESSAGE_SUCCESS', id: id, message: response.data}) // getting correct data!!
    });
}

const deleteMessageThunk = id => (dispatch) => {
  dispatch({type: 'DELETE_MESSAGE'})
    const request = axios({
      method: 'delete',
      url: `${ROOT_URL}/messages/${id}`,
      headers: []
    });
    request.then(response => {
      dispatch({type: 'DELETE_SUCCESS', id: id})
    });
}

const postMessageThunk = text => (dispatch) => {
  dispatch({type: 'POST_MESSAGE'})
    const request = axios.post(MESSAGES_URL, {text});
    request.then(response => {
      dispatch({type: 'POST_SUCCESS', message: response.data })
    });
}

export {messagesReducer, fetchMessagesThunk, fetchonemessageThunk, deleteMessageThunk, postMessageThunk  }