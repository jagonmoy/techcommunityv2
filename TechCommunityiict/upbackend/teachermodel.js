import mongoose from 'mongoose'

const teacherpostModel=mongoose.Schema({
    Name:String,
    text:String, 
    email:String,
    phone:String
})

export default mongoose.model('teacherinfo',teacherpostModel);