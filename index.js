var express = require('express');
var port = 8080;
var app = express();
var datausers = [ {name:"RAUL", hobbies:["DORMIR"]},
                  {name:"LULU", hobbies:["BEBER"]},
                  {name:"SAUL", hobbies:["BAILAR"]}];
//localhost:8080/

app.get('/', function(req, res) { 
console.log("GET REQUEST");
res.send("GET REQUEST");
});


app.get('/users', function(req, res) { 
console.log(datausers);
res.send(datausers);
});

app.get('/user/:username', function(req, res) { 
console.log("PARAMS", req.params.username);
res.send(req.params.username);
});

app.post('/', function(req, res) { 
console.log("GET REQUEST");
res.send("GET REQUEST");
});
	// body...


app.listen(port, function(){  
 console.log("running app"); 
   })
