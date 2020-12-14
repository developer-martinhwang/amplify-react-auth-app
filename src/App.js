import React from 'react'
import './App.css'
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
import {AmplifySignOut, withAuthenticator} from "@aws-amplify/ui-react";
Amplify.configure(awsExports)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h5>You are signed in</h5>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
