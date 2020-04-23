var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.send("HO HO HO");
})

app.listen(3004, function(err) {
    console.log("Express server is running on port 3004")
})