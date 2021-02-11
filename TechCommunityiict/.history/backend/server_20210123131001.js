import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import GridsFsStorage from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import bodyParser from 'body-parser'
import path from 'path'
import Pusher from 'pusher'

Grid.mongo=mongoose.mongo

//app config

const app=express()
const port=process.env.PORT || 9000

//middlewares

app.use(bodyParser.json());
app.use(cors())

//db config
const URI

//api routes
app.get('/',(req,res)=>res.status(200).send('hello'))

//listen 

app.listen(port,()=>console.log(`port ${port} is running`))