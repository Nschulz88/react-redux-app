import * as React from 'react';
import  LinkItem  from './LinkItem.react';



function App(props) {
  return (
    <div>
      <h1>SVZ Messages</h1>
      <ul>
        <LinkItem to="/">
          Main
        </LinkItem>
        <LinkItem to="/messages">
          Show Messages
        </LinkItem>
      </ul>
    </div>
  );
}

export default App;
