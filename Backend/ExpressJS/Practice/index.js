import express from 'express';
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World!')
})
app.get('/contact',(req,res)=>{
    res.send(`<h1> Contact Details </h1>\n phone : 7981635926 \nmail : giridharpatel143@gmail.com`);
})
app.get('/about',(req,res)=>{
    res.send(`I am a Sfotware Developer`)
})
app.listen(port,()=>{
    console.log(`Server is Listening on http://localhost:${port}`)
})