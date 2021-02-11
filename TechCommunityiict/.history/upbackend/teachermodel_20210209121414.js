import mongoose from 'mongoose'

const postModel=mongoose.Schema({
    imgName:String,
    text:String,
    avatar:String,
    timestamp:String
})
