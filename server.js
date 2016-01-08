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

var menuEndpoint = "/menu";

var drinksEndpoint = "/drinks";

var extrasEndpoint = "/extras";

var ordersEndpoint = "/orders";

//drinks with no uri
app.route(drinksEndpoint)
.get(function(req, res){
	res.send(drinksController.getDrinks());
})
.post(function(req, res){
	res.send(drinksController.addADrink("body should go here"));
})
.delete(function(req, res){
	res.send(drinksController.deleteDrinks());
});

//drinks with uri
app.route(drinksEndpoint+"/:drinkId")
.get(function(req, res){
	res.send(drinksController.getADrink(req.params.drinkId));
})
.put(function(req, res){
	res.send(drinksController.updateADrink(req.params.drinkId, "body should go here"));
})
.delete(function(req, res){
	res.send(drinksController.deleteADrink(req.params.drinkId));
})