import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Facultymembers = () => {

    const [teacher,setTeacher]=useState

    axios.get('http://localhost:3000/users').then(response=>{

    })
    return (
        <div>
            
        </div>
    )
}

export default Facultymembers
