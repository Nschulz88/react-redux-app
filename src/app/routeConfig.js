import React from 'react';

import App from './client/components/App.react';
import MessagesList from './client/containers/MessagesContainer';

const Foo = ({ props }) => (
  <div>foo foo</div>
);

export default [
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: () => <div>MainFoo</div>,
      },
    ],
  },

  {
    path: '/messages',
    Component: MessagesList,
    children: [
      {
        Component: () => <div>TESTING IN /messages</div>,
      },
    ],
  },

  

];
