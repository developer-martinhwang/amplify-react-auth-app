/**
 * Copyright (c) 2020 developer.martinhwang@gmail.com
 * All rights reserved.
 *
 * Filename: Authenticator.js
 *
 * Key Options:
 * - component for sign up and sign in
 *
 * Revision History:
 * - Dec 17, 2020, Martin Hwang <developer.martinhwang@gmail.com> : Created
 * - Dec 17, 2020, Martin Hwang : install material-ui/core and take amplify authenticator apart from App.js
 * and username is set up with email.
 */
import React, { Fragment } from 'react'
// material-ui
import { Typography } from '@material-ui/core'
// aws amplify
import {AmplifySignOut, AmplifyAuthenticator} from "@aws-amplify/ui-react";
function Authenticator() {
    return (
        <Fragment>
            <AmplifyAuthenticator usernameAlias="email"/>
            <AmplifySignOut/>
            <Typography component="h6" variant="h6"> You are signed in</Typography>
        </Fragment>
    )
}
export default Authenticator;
