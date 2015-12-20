var express = require('express');

var app = express();


app.listen(3000);

var menuUri = "/menu";

var drinksUri = "/drinks";

var extrasUri = "/extras";

var ordersUri = "/orders";

app.get('/', function(req, res){ //turn this into a route guide
	res.send('hello');
})

app.route(drinksUri)
.get(function(req, res, next){

})
.post(function(req, res, next){

})
.put(function(req, res, next){

})
.delete(function(req, res, next){

});