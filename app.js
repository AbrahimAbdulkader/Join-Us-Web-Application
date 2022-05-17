var express = require('express'); 
var app = express(); 
// We need to use 'require' express in order to use it



app.get("/", function(req, res) {
	res.send("You've Reached The Home Page!");
	
});
// Gets the request 


app.get("/joke", function(req, res) {
	var joke = "What do you call a dog that does magic tricks? A labracadabrador."
	res.send(joke);
		});

app.listen(3000, function(){
	console.log("Server running on 8080!")
});
// Bind and used to listen for the specified host and port
// Sends a request
