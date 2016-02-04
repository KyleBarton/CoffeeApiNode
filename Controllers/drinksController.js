var drinkRepositoryProto = require("../DataAccess/drinkRepository.js");
var drinkRepository = Object.create(drinkRepositoryProto);

var drinksController = {
	getDrinks: function(){
		return drinkRepository.getAllDrinks();
	},
	deleteDrinks: function(){
		return drinkRepository.deleteAllDrinks();
	},
	addADrink: function(drink, callBack){
		drinkRepository.addDrink(drink, function(err, id){
			drink.drinkId = id;
			callBack(null,drink);
		});
	},
	updateADrink: function(drinkId, drink){
		return drinkRepository.changeDrink(drinkId, drink);
	},
	deleteADrink: function(drinkId){
		return drinkRepository.deleteDrink(drinkId);
	},
	getADrink: function(drinkId){
		return drinkRepository.getDrink(drinkId);
	}
};

module.exports = drinksController;