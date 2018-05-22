import React from 'react';

import App from './client/components/App.react';
import MessagesContainer from './client/containers/MessagesContainer';
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
    Component: MessagesContainer
  },
  {
    path: '/messages/:id',
    Component: Message
  },

  

];
