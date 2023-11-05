const express=require("express");
const mongoose=require("mongoose");
const url='mongodb://127.0.0.1:27017/studentDB';


const app=express();

mongoose.connect(url,{
    useNewUrlParser:true
})

const con =mongoose.connection

con.on('open',function(){
    console.log("connected to mongodb database")
})

app.use(express.json())

const studentRouter=require('./routes/students')
app.use('/students',studentRouter)

app.listen(3000,function(){
    console.log("Server started")
})