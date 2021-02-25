//importing node framework
var express = require("express");
 
var app = express();//Respond with "SNE MAKES ME CRY AGAIN!!! ON ADN ON!!!" for requests that hit our root "/"
app.get("/", function (req, res) {
 res.send("SNE MAKES ME CRY AGAIN!!! OVER AND OVER!!! FINAL ONE!!! ON AND ON!!!");
});//listen to port 12345 by default
app.listen(process.env.PORT || 12345);
 
module.exports = app;
