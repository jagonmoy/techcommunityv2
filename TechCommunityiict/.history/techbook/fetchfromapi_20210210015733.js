import React from 'react'
import axios from 'axios'

export default function teacherinformation(){
    const url="http://localhost:3000/";
    const [notes,getnotes]
    const getAllinfo=()=>{
        axios.get(`${url}notes`)
    }
}