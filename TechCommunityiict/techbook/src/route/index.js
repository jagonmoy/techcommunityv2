import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Login from '../components/Login'

export default function Routes(){
    return(
        <Switch>
            <Route path="/{Login}"/>
            
        </Switch>
    )
}