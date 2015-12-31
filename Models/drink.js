var drink = {
	init: function(data){
		this.name = data.name || null;
		this.drinkId = data.drinkId || null;
		this.price = data.price || null;
		this.size = data.size || null;

		if (this.name == null) throw "no name provided for this drink";
		if (this.price == null) throw "no price provided for this drink";
		if (this.size == null) throw "no size provided for this drink";
	}
}

module.exports = drink;