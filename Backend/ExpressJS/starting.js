import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

const customMiddleware = (req,res,next)=>{
    res.send("This is a cutom middleware")
    next()
}
app.use(express.static(path.join(__dirname, "public")));
app.use(customMiddleware);

app.get("/find/:name", (req, res) => {
  res.send("Hi This is a test code " + req.params.name);
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/starting.html");
});

app.listen(port, () => {
  console.log(`Sever is listening on port no http://localhost:${port}`);
});
