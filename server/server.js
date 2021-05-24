import dotenv from "dotenv";
import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import Mongoose from 'mongoose';
import ProductRout from './routes/product.js'
import cors from 'cors';
const app = express()
app.use(cors())
dotenv.config()
app.use(json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());


app.use('/Product',ProductRout)

const PORT = process.env.PORT || 4000;
Mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})})
.catch((error)=>console.log(error));

Mongoose.set("useFindAndModify",false)
