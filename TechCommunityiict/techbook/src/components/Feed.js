import React, { useEffect, useState } from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import axios from '../axios'
import Header from './Header'
import Sidebar from './Sidebar'
import './Feed.css'
import Pusher from 'pusher-js'

const pusher = new Pusher('86db340bf6b9eb74b0ee', {
    cluster: 'ap2'
  });

const Feed = () => {

    const [postsData,setPostsData]=useState([])
    const [profilePic,setProfilePic]=useState('')

    const syncFeed=()=>{
        axios.get('/retrieve/posts').then((res)=>{
            console.log(res.data)
            setPostsData(res.data)
        })
    }
useEffect(()=>{
    syncFeed()
},[])

useEffect(() => {
 
    const channel = pusher.subscribe('posts');
    channel.bind('inserted', function(data) {
      syncFeed()
    });
 
}, [])

    return (
        <div className="app_body">
         <Header/>  
         <div id="sidebarclass"><Sidebar/></div>
          <div id="feedid">
          <div className='feed'>
            
            <MessageSender/>

            {

                postsData.map(entry =>(

            <Post
                profilePic={entry.avatar}
                message={entry.text}
                timestamp={entry.timestamp}
                imgName={entry.imgName}
                username={entry.user}
            />
                ))

            }  
        </div>
          </div>
       </div>
    )
}

export default Feed
