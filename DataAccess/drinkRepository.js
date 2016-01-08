//Drink Repository

var drinkRepository = {
	getDrink: function(drinkId){
		return drinkId;
	},
	addDrink: function(drink){
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
	}
}


module.exports = drinkRepository;