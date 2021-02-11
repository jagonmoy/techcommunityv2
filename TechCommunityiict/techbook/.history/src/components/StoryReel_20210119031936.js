import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                images='https://i.imgur.com/hxWf0qy.jpg'
                profileSrc='https://i.imgur.com/hxWf0qy.jpg'
                title='Avishak'
            />
            <Story
                images='https://i.imgur.com/hxWf0qy.jpg'
                profileSrc='https://i.imgur.com/FQbpyAY.jpg'
                title='Avishak'
            />
            <Story
                images='https://i.imgur.com/hxWf0qy.jpg'
                profileSrc='https://i.imgur.com/FQbpyAY.jpg'
                title='Avishak'
            />
        </div>
    )
}

export default StoryReel
