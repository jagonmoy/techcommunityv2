import { Button } from '@material-ui/core';
import React from 'react';
import { auth } from '../firebase';
import "./Login.css;"

function Login() {

    const signIn=()=>{

        auth

    }


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
