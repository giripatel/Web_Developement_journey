//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import url from 'url';

const app = express();
const port=3000;
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended : true}));
// app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
    // res.send(__dirname);
    // res.send('<h1>Hello</h1>');
})

app.post('/check',(req,res)=>{
    while(true){
        const password = req.body.password;
        if(password == 'password'){
            res.sendFile(__dirname+'/public/secret.html');
            // res.send("Working........!");
            break;
        }
    }
})

app.listen(port,()=>{
    console.log(`Server is listen on http://localhost:${port}`)
})