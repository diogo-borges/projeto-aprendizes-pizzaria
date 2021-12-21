import idUser from "../utils/UserId.util.js";

class cartItem {
	constructor(idPizza, pizzaAmount) {
		this.id = idUser();
		this.pizzaId = idPizza;
		this.amount = pizzaAmount; 
}};

export default cartItem; 