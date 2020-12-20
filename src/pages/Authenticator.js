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
 * - Dec 19, 2020, Martin Hwang : customize sign in using amplify UI Components 
 */
import React, { Fragment, useEffect, useState } from 'react'
// material-ui
import { Box } from '@material-ui/core'
// aws amplify
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut, AmplifySignIn } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components'
function Authenticator() {
    const [authState, setAuthState] = useState()
    const [user, setUser] = useState()
    useEffect(() => { 
        return onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        console.log(nextAuthState)
        setUser(authData)})
    }, [])
    return (
        authState === AuthState.SignedIn && user ? (
        <Fragment>
            <Box paddingBottom="0.5em">Hello, {user.attributes.email}</Box>
            <AmplifySignOut/>
        </Fragment>) : (
        <Fragment>
            <AmplifyAuthenticator>
                <AmplifySignIn
                    headerText="Custom Sign In"
                    slot="sign-in"
                    submitButtonText="Custom SignIn"
                ></AmplifySignIn>
                <AmplifySignUp
                    slot="sign-up"
                    usernameAlias="email"
                    formFields={[
                        { type: "email" },
                        { type: "password" },
                        { type: "phone_number"}
                    ]}
                />
            </AmplifyAuthenticator>
        </Fragment>)
    )
}
export default Authenticator;