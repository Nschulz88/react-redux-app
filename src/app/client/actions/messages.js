import axios from 'axios';

//Show All Messages
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

//Fetch one specific message
export const FETCH_MESSAGE = 'FETCH_MESSAGE';

//Delete one specific message
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

const ROOT_URL = 'https://natalie-test-autotelic.herokuapp.com/'

export function fetchMessages() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/messages`,
    headers: []
  });

  return {
    type: FETCH_MESSAGES,
    payload: request
  };
}

export function fetchMessagesSuccess(messages) {
  return {
    type: FETCH_MESSAGES_SUCCESS,
    payload: messages
  };
}

export function fetchMessagesFailure(error) {
  return {
    type: FETCH_MESSAGES_FAILURE,
    payload: error
  };
}



export function createMessage(props) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/messages`,
    // might need authorization here???
  });

  return {
    type: CREATE_MESSAGE,
    payload: request
  };
}


export function fetchMessage(id) {
  const request = axios.get(`${ROOT_URL}/messages/${id}`);

  return {
    type: FETCH_MESSAGE,
    payload: request
  };
}

export function deleteMessage(id) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/messages/${id}`
  });
  return {
    type: DELETE_MESSAGE,
    payload: request
  };
}
