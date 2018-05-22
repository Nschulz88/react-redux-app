import FarceActions from 'farce/lib/Actions';
import BrowserProtocol from 'farce/lib/BrowserProtocol';
import createHistoryEnhancer from 'farce/lib/createHistoryEnhancer';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createConnectedRouter from 'found/lib/createConnectedRouter';
import createMatchEnhancer from 'found/lib/createMatchEnhancer';
import createRender from 'found/lib/createRender';
import foundReducer from 'found/lib/foundReducer';
import Matcher from 'found/lib/Matcher';
import resolver from 'found/lib/resolver';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  combineReducers,
  compose,
  createStore,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';

import routeConfig from '../routeConfig';

import {messagesReducer} from './reducers/messagesReducer'

const thunkMW = store => next => action => {
  if(typeof action === 'function'){
    action(store.dispatch, store.getState());
  } else {
    next(action);
  }
}

let store = createStore(
  combineReducers({
    found: foundReducer,
    messages: messagesReducer
  }),
  compose(
    createHistoryEnhancer({
      protocol: new BrowserProtocol(),
      middlewares: [
        queryMiddleware,
      ],
    }),
    createMatchEnhancer(
      new Matcher(routeConfig),
    ),
    applyMiddleware(logger, thunkMW),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

store.dispatch(FarceActions.init());

const ConnectedRouter = createConnectedRouter({
  render: createRender({
    renderError: ({ error }) => (
      <div>
        {error.status === 404 ? 'Not found' : 'Error'}
      </div>
    ),
  }),
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter resolver={resolver} />
  </Provider>,
  document.getElementById('root'),
);
