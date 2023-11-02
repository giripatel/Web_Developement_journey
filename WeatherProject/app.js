const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  const query = req.body.cityName;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=e534d4010d8ed90f3e71bea1833f6a39&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temperature = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = res.write(
        "<p>description of weather in " +
          query +
          " is : " +
          description +
          "</p>"
      );
      res.write(
        "<h1> The temperature in " + query + " is : " + temperature + "</h1>"
      );
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
