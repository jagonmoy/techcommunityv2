import { Button } from '@material-ui/core';
import React from 'react';
import { auth,provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import {actionTypes} from '../Reducer'
import "./Login.css"

function Login() {

    const [state,dispatch]=useStateValue();

    const signIn=()=>{

        auth.signInWithPopup(provider).then(result =>{

            dispatch({
                
            })

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
