const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Hello World!...");
})
app.get("/contact",function(req, res){
    res.send("Contact me : giridharpatel143@gmail.com");
})
app.get("/about", function(req,res){
    res.send("About Page");
})

app.listen(3000,function(){
    console.log("Server is listening on port 3000")
})