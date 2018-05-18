import axios from 'axios';
const ROOT_URL = 'https://natalie-test-autotelic.herokuapp.com/'

const messagesReducer = (state = {loading: true, showMessages: []}, action,) => {
  switch (action.type) {
    case 'FETCH_MESSAGES': {
      return {...state, loading: true}
    }
    case "MESSAGES_SUCCESS" :
    return {showMessages: action.messages}
    default: return state
    }
}

const fetchmessagesMiddleware = store => next => action => {
  if (action.type != "FETCH_MESSAGES") {
    next(action)
  } else {
    const request = axios({
      method: 'get',
      url: `${ROOT_URL}/messages`,
      headers: []
    });
    request.then(response => {
      store.dispatch({type: 'MESSAGES_SUCCESS', messages: response.data.results})
    });
  }
}

export {messagesReducer, fetchmessagesMiddleware}