var express = require('express'); 
var mysql = require('mysql');
var app = express(); 
// We need to use 'require' express in order to use it

app.set("view engine", "ejs");

mysql = require('mysql') //We require the mysql package first 
var connection = mysql.createConnection({ //Created the connection to the mysql package
	host : 'localhost',
	user : 'root',
	database: 'join_us'
});



app.get("/", function(req, res) { //Handles the get request
	//Find count of users in DB
	var q = "SELECT COUNT(*) AS count FROM users"; 
	connection.query(q, function(error, results) { //Requests a connection to the DB 
		if (error) throw error;
		var count = results[0].count;
			// res.send("We have " + count + " users in our db") ;
			//Respond with that count
		
		res.render("home"); 
		//The res.render() function is used to render a view and sends the rendered HTML string to the client. 
	});	
});


app.get("/joke", function(req, res) {
	var joke = "<strong>What do you call a dog that does magic tricks?</strong><em>A labracadabrador.</em>"
	// res.send(joke);
	res.render("home");
		});
//Another request with '/joke' which takes us to another page and prints the joke string 


app.listen(3000, function(){
	console.log("Server running on 8080!")
});
// Bind and used to listen for the specified host and port
// Sends a request   
