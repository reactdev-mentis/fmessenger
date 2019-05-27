import React from 'react';
import './App.css';
import { FacebookProvider, Like, SendToMessenger } from 'react-facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          The Site is up and running.
        </p>
        <FacebookProvider appId="2194136580678056">
          <Like href="http://www.facebook.com" colorScheme="dark" />
          <SendToMessenger messengerAppId="123456789" pageId="123456789" />
        </FacebookProvider>
         
      </header>
    </div>
  );
}

export default App;
