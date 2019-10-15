var express = require("express");

var app = express()
var PORT = process.env.PORT || 8080

var friendList = require("./app/data/friendList")

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//create function then call it
require("./app/route/apiRoutes")(app);
require("./app/route/htmlRoutes")(app)


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT)
})