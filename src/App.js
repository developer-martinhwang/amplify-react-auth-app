/**
 * Copyright (c) 2020 developer.martinhwang@gmail.com
 * All rights reserved.
 *
 * Filename: App.js
 *
 * Key Options:
 * - main component which acts a container for all other components
 *
 * Revision History:
 * - Dec 14, 2020, Martin Hwang <developer.martinhwang@gmail.com> : Created
 */
import React from 'react'
import './App.css'
// material-ui
import { Box } from '@material-ui/core'
// aws amplify
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
// page components
import Authenticator from './pages/Authenticator'
// amplify configuration
Amplify.configure(awsExports)
function App() {
  return (
    <Box className="App">
      <Box className="App-header">
        <Authenticator/>
      </Box>
    </Box>
  );
}

export default App;
