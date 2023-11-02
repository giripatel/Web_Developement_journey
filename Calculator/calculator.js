const express = require("express");
const bodyParser = require("body-parser");
const app=express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight/height;
    res.send("Your BMI is :"+bmi);
})
app.listen(3000,function(){
    console.log("Server is listening on port 3000....");
})