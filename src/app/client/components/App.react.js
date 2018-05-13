import * as React from 'react';
import  LinkItem  from './LinkItem.react';



function App(props) {
  console.log("LOOOGGGIIINGGG props.children from APP.js",props.children)

  return (
    <div>
      <h1>SVZ</h1>
      <ul>
        <LinkItem to="/">
          Main
        </LinkItem>
        <LinkItem to="/foo">
          foo
        </LinkItem>
        <LinkItem to="/messages">
          Show Messages
        </LinkItem>
      </ul>
      {props.children}
    </div>
  );
}

export default App;
