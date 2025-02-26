const express=require('express');
const app= express();
const connection = require('./config/db')
const port = 5000;

app.get('/',(req,res)=>{
    try{
        res.send('Hello world!')
    }catch(err){
        console.log('Error:', err)
    }
})

app.listen(port,()=>{
    console.log('Server is running on Port 5000')    
})