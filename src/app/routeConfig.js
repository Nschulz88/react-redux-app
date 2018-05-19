import React from 'react';

import App from './client/components/App.react';
import MessagesList from './client/containers/MessagesContainer';
import Message from './client/containers/OneMessageContainer';


const Foo = ({ props }) => (
  <div>foo foo</div>
);

export default [
  {
    path: '/',
    Component: App,
  },
  {
    path: '/messages',
    Component: MessagesList
  },
  {
    path: '/messages/:id',
    Component: Message
  },

  

];
