var drinksController = {
	getDrinks: function(){
		return "getting all drinks from the controller";
	},
	addADrink: function(drink){
		return "adding a drink from the controller";
	},
	updateADrink: function(drink){
		return "updating a drink from the controller";
	},
	deleteADrink: function(drinkId){
		return "deleting a drink from the controller";
	},
	getADrink: function(drinkId){
		return "getting a specific drink from the controller";
	}
};

module.exports = drinksController;