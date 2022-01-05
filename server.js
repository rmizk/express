const express = require("express");

const app = express();

const timeware = (req, res, next) => {
  let date = new Date();
  let day = date.getDay();
  let time = date.getHours();
  if (day == 6 || day == 0 || time > 17 || time < 9) {
    res.send("unavailble");
  } else next();
};

// app.get("/", serv, (req, res) => {
//   // res.send("<h1>hellooo</h1>");
//   res.sendFile(__dirname + "/page" + "/Home.html");
// });

app.use(timeware);

app.use(express.static("page"));

// app.use(express.static("page"));

app.listen(5001, () => {
  console.log(" server running on port 5001 ");
});
