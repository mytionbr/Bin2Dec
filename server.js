const express = require('express');
const app = express();
app.use(express.static('client'))

app.get("/", function(req,res){
    res.sendfile(__dirname +  '/client/index.html')
    
})


app.listen(8081,function(){
    console.log("the server is standing");
})