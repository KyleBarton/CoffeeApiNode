//Drink Repository

var drinkRepository = {
	getDrink: function(drinkId){
		return drinkId;
	},
	addDrink: function(drink){
		var mongoClient = require('mongodb').MongoClient;
		var url = 'mongodb://localhost:27017/CoffeeApi';
		mongoClient.connect(url, function(err, db){
			if (err){
				throw 'Could not connect to mongo database';
			}
			console.log(drink);
			console.log('successfully connected.');
			db.collection('Drinks').save(drink, function(err, record){
				console.log(record);
			});
			db.close();
		})
		return {"drink": drink};
	},
	changeDrink: function(drinkId, drink){
		return {drinkId, drink};
	},
	deleteDrink: function(drinkId){
		return drinkId;
	},
	getAllDrinks: function(){
		return "getting all drinks!";
	},
	deleteAllDrinks: function(){
		return "deleting all drinks!";
	},
	// persist: function(cmd){
	// 	var mongoClient = require('mongodb').MongoClient;
	// 	var url = 'mongodb://localhost:27017/CoffeeApi';
	// 	mongoClient.connect(url, function(err, db){
	// 		if (err){
	// 			throw 'Could not connect to mongo database';
	// 		}
	// 		console.log('successfully connected. Our command is ' + cmd);
	// 		db.close();
	// 	})
	// }
}


module.exports = drinkRepository;