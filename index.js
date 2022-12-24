/* setting up http server using express.js */
const express=require('express');

const app=express();
const PORT=3000;

app.get('/',function(req,res){
    res.send("Hello World");
});

app.post('/home',function(req,res){
    res.send("Welcome to home");
});

app.patch('/home',function(req,res){
    res.send("This is a patch request");
});

app.listen(PORT,function process(){
    console.log("Server started");
});
