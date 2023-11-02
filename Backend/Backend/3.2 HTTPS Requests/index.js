import express from "express";

const app = express();

app.get("/",function(req,res){
    console.log("Hello");
    res.send("Hello webpage");
})



app.listen(3000,function(){
    console.log("Sever is running on port 3000")
})