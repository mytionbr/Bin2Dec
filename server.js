const express = require('express');
const app = express();
const path = require('path');

app.get("/", function(req,res){
    res.sendfile(__dirname +  '/client/index.html')
    
})


app.listen(8081,function(){
    console.log("the server is standing");
})