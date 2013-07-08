var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var text = fs.readFileSync("index.html");



var content = text.toString("utf-8",0,text.length-1);


app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
