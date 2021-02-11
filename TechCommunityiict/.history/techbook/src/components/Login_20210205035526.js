import { Button } from '@material-ui/core';
import React from 'react';
import { auth,provider } from '../firebase';
import "./Login.css"

function Login() {

    const [{},dispatch]=

    const signIn=()=>{

        auth.signInWithPopup(provider).then(result =>{

            console.log(result.user)

        }).catch(error => alert(error.message))

    };


    return (
        <div className="login">

            <div className="Login_logo">

            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
