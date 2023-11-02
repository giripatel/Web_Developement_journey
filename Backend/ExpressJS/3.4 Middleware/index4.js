import express, { response } from "express";
import url from 'url';
import path  from "path";
import bodyParser from "body-parser";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : false}))
let bandName="";
const bandNameGenerator = (req,res, next)=>{
  console.log(req.body);
  bandName = req.body["street"]+ req.body["pet"];
  next()
}
app.use(bandNameGenerator);
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/public/index.html')
})
app.post('/submit',(request, response)=>{
  // const streetValue = request.body.street;
  // const petValue = request.body.pet;
  // console.log(request.body)
  response.send(`<h1>Your band name is:</h1>\n<h2>${bandName}✌️</h2>`)
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
