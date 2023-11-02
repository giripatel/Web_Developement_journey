import express from "express";
import ejs from "ejs";
import path from "path";
import url from "url";
import { publicDecrypt } from "crypto";

const app = express();
const port = 3000;
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
console.log(__dirname);

// app.use(express.static(path.join(__dirname,'public')))

app.get("/", (req, res) => {
  const day = new Date().getDay();
  let toDay = "";
  let advice = "";
  if (day == 0 || day == 6) {
    toDay = "Weekend";
    advice = "time to have fun✌️";
  } else {
    toDay = "Weekday";
    advice = "time to work hard🤞";
  }

  // res.render(__dirname+'/index.html')
  res.render("index.ejs", { toDay: toDay, advice: advice });
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
