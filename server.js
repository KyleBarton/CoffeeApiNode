//take care of my requires
var express = require('express');
var drinkModel = require('./Models/drink.js')
var drinksControllerProto = require('./Controllers/drinksController.js');
//init my server
var app = express();
//init my controllers
var drinksController = Object.create(drinksControllerProto);

//for testing, will turn this off soon.
app.get('/', function(req, res){ //turn this into a route guide
	res.send('hello');
})

//set up uris
app.listen(3000);

var menuUri = "/menu";

var drinksUri = "/drinks";

var extrasUri = "/extras";

var ordersUri = "/orders";

//do the routing
app.route(drinksUri)
.get(function(req, res){
	res.send(drinksController.getDrinks());

})
.post(function(req, res){
	res.send(drinksController.addADrink("stuff should go here"));
})
.put(function(req, res){
	res.send(drinksController.updateADrink("stuff should also go here"));
})
.delete(function(req, res){
	res.send(drinksController.deleteADrink("stuff should also also go here"));
});