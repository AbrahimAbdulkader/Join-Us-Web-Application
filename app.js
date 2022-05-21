var express = require('express'); 
var mysql = require('mysql');
var app = express(); // We need to use 'require' express in order to use it
var bodyParser = require('body-parser');


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true})); //Tell express that we are using body parser

mysql = require('mysql') //We require the mysql package first 
var connection = mysql.createConnection({ //Created the connection to the mysql package
	host : 'localhost',
	user : 'root',
	database: 'join_us'
});



//-------------------------------------------------------------




app.get("/", function(req, res) { //Handles the get request
	//Find count of users in DB
	var q = "SELECT COUNT(*) AS count FROM users"; 
	connection.query(q, function(error, results) { //Requests a connection to the DB 
		if (error) throw error;
		var count = results[0].count;		
		res.render("home", {count: count});  
		//The res.render() function is used to render a view and sends the rendered HTML string to the client. 
		// count is assigned to the data
	});	
});

//-------------------------------------------------------------


app.post("/register", function(req, res) {
	var person = {
		email: req.body.email
	};
	connection.query('INSERT INTO users SET ?', person, function(error, results) {
		if(error) throw error;
		res.send("Thanks for joining the server")
	});
});



app.get("/joke", function(req, res) {
	var joke = "<strong>What do you call a dog that does magic tricks?</strong><em>A labracadabrador.</em>"
	// res.send(joke);
	res.render("home");
		});
//Another request with '/joke' which takes us to another page and prints the joke string 


//-------------------------------------------------------------





app.listen(3000, function(){
	console.log("Server running on 8080!")
});
// Bind and used to listen for the specified host and port
// Sends a request   


//-------------------------------------------------------------




