import express from "express";

const app = express();
const prot = 3000;

app.get("/",function(req,res){

    const today = new Date();
    const day = today.getDay();

let type= "a weekday";
let advice = "it's time to work hard";
if(day === 0 || day === 6){
    type = "the weekend";
    advice = "it's time to chill";
}

    res.render("index.ejs",{
        dayType: type,
        adv: advice,
    });
});

app.listen(prot,()=>{
    console.log("Listening on port 3000");
})