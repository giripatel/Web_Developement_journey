import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs')
});

app.post("/submit", (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  res.render('index.ejs',{firstName : firstName,lastName : lastName});
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
