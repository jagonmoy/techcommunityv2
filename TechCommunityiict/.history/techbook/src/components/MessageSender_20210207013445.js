import { Avatar, Input } from '@material-ui/core'
import { SettingsInputAntenna } from '@material-ui/icons'
import axios from 'axios'
import React, { useState } from 'react'
import { useStateValue } from '../StateProvider'
import './MessageSender.css' 
import FormData from 'form-data'


const MessageSender = () => {
    const [input,setInput]=useState('')
    const [imageUrl,setImageUrl]=useState('')
    const [image,setImage]=useState(null)
    const [{user},dispatch]=useStateValue()

    const handleChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit=async(e)=>{

        e.preventDefault()

        if(image){
            const imgForm=new FormData()
            imgForm.append('file',image,image.name)


            axios.post('/upload/image',imgForm,{
                headers:{
                    'accept':'application/json',
                    'Accept-language':'en-US,en;q=0.8',
                    'Content-Type':`multipart/form-data; boundary=${imgForm._boundary}`,
                }
            }).then((res)=>{
                
                console.log(res.data)

                const postData={
                    text: input,
                    imgName: res.data.filename,
                    user:user.displayName,
                    avatar:user.photoURL,
                    timestamp: Date.now()
                }

                console.log(postData)
                savePost(postData)
            }).catch(err=>{

                console.log(err);

            })
        }

        else{
            const postData ={
                text: input,
                user: user.displayName,
                avatar : user.photoURL,
                timestamp: Date.now()
            }

            console.log(postData)
            savePost(postData)
        }

        setImageUrl('')
        setInput('')
        setImage(null)

    }


    const savePost=async(postData)=>{
        await axios.post('/upload/post',postData)
        .then((res)=>{
            console.log(res)
        })
    }
    return (
        <div className='messageSender'>
            <div className='messageSender_top'>
                <div className="avatar_post_class">
                <Avatar src={user.photoURL}/>
                </div>
                
                <form>
                    <div className="post_text">
                    <input type="text" className='messegeSender_input' placeholder="Whats`s up with you ?" value={input} onChange = {(e)=>setInput(e.target.value)}/>
                    </div>
                   
                    <div className="file_selection">
                    <input type="file" id=" "className='messeageSender_fileSelector' onChange= {handleChange}/>
                    </div>
                    <div className="post_button">
                        <button onClick={handleSubmit} type='Submit' id="postbutton"> Post </button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    )
}

export default MessageSender
