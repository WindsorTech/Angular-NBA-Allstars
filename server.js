// Dependencies
var express = require('express');
//var bodyParser = require('body-parser');
var app = express();

// Direct Express to the Angular App
app.use(express.static(__dirname + "/app"));

//Server Port
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("App Up & Running! Port:", port);
}); 