var express = require('express'); 
var app = express(); 
// We need to use 'require' express in order to use it



app.get("/", function(req, res) {
	console.log("You've Reached The Home Page!")
});

app.listen(3000, function(){
	console.log("Server running on 8080!")
});
// Bind and used to listen for the specified host and port
// Sends a request
