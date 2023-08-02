const express = require("express");
const app = express();
const port = 9000;
const bodyParser = require("body-parser");
const path = require("path");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/login.html"));
});
app.post("/login", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.end("登陆成功");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
