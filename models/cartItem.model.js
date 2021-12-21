import generateId from "../utils/generateId.util.js";

class cartItem {
	constructor(idPizza, pizzaAmount) {
		this.id = generateId();
		this.pizzaId = idPizza;
		this.amount = pizzaAmount; 
}};

export default cartItem; 