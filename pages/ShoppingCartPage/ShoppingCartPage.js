import footer from "../../assets/components/Footer/footer.js";
import ordersHelper from "../../helpers/orders.helper.js";
import Order from "../../models/order.model.js";
import pizzas from "../../utils/pizzas.js";

const footerShow = document.querySelector("#footer")
footer(footerShow);

let getStorageCartItems = JSON.parse(localStorage.getItem('cart-items'))
const sectionCartItems = document.querySelector('.section-cart-items')
const sectionTotalContainer = document.querySelector('.section-total-container')

function getItemCard(query, onclick, updater) {
	window.removeOnclick = onclick;
	window.updateAmount = updater;
	for (let i = 0; i < getStorageCartItems.length; i++) {
		const pizzaMenu = pizzas.find(pizza => pizza.id === getStorageCartItems[i].pizzaId)
		query.innerHTML = `
	${query.innerHTML}
	<div id='cart-item-${getStorageCartItems[i].pizzaId}' class="cart-item">
	<div class="cart-item-container">
	<img class="cart-item-image" src='${pizzaMenu.image}'>
	<div class="cart-item-info">
	<p class="cart-item-title">${pizzaMenu.name}</p>
	<div class="cart-item-tools">
		<div class="amout-tools"> 
		<input id='cart-item-amount-${getStorageCartItems[i].pizzaId}' class='cart-item-amount' type='number' value=${getStorageCartItems[i].amount} min=1>
		<button class='cart-item-amount-update' onclick='updateAmount(${getStorageCartItems[i].pizzaId})' tooltip="Atualizar quantidade"><img src="../../assets/img/sync-solid.svg" style="width: 26px;"></button>
	</div>
	<div class="price-and-cancel-tools">
		<div class="cart-item-price-container"><p class="cart-item-price  cart-item-price-${getStorageCartItems[i].pizzaId}">${parseInt(pizzaMenu.price, 10) * getStorageCartItems[i].amount},00</p></div>
		<button class='cart-item-delete'><img src="../../assets/img/trash-alt-solid.svg" onclick='removeOnclick(${getStorageCartItems[i].pizzaId})' style="width: 26px;"></button>
	</div>
	</div>
	</div>
	</div>
</div>`
	}
}

function getTotalContainer(query, onclick) {
	window.removeAll = onclick
	query.innerHTML = `
	<p class="divider"></p>
    <div class='total-container'>
    <div class="total-info">
		<div class='div-total-amount'>
    	<p class="total-amount-title">Quantidade:</p>
			<p class="total-amount"></p>
		</div>
		<div class='div-total-price'>
    	<p class="total-price-title">Total: </p>
			<p class="total-price"></p>
    </div>
	</div>
	<div class="div-finish-order-button">
	<button class="finish-order-button">Finalizar</button>
</div>
</div>
	<p class="delete-all-cart-items" onclick='removeAll()'>Limpar Carrinho</p>`
}

function cartItems() {
	if (getStorageCartItems !== null) { getItemCard(sectionCartItems, removeCartItem, updateAmountAndPrice) }
	getTotalContainer(sectionTotalContainer, removeAllCartItems)
}
cartItems();

function removeAllCartItems() {
	localStorage.removeItem('cart-items');
	setAmountAndTotal();
	sectionCartItems.innerHTML = '';
	location.reload()
}

function removeCartItem(itemClickedId) {
	const storageItemToRemove = getStorageCartItems.findIndex(cartItem => cartItem.pizzaId === itemClickedId)
	getStorageCartItems.splice(storageItemToRemove, 1);
	localStorage.setItem('cart-items', JSON.stringify(getStorageCartItems))
	const itemToRemove = document.querySelector(`#cart-item-${itemClickedId}`)
	itemToRemove.remove();
	setAmountAndTotal();
}

function updateAmountAndPrice(itemClickedId) {
	const itemToUpdate = getStorageCartItems.find(cartItem => cartItem.pizzaId === itemClickedId);
	const itemNewValue = document.querySelector(`#cart-item-amount-${itemClickedId}`)
	itemToUpdate.amount = parseInt(itemNewValue.value, 10)
	localStorage.setItem('cart-items', JSON.stringify(getStorageCartItems))

	const price = document.querySelector(`.cart-item-price-${itemClickedId}`)
	const pizzaClicked = pizzas.find(pizza => pizza.id === itemClickedId)
	const newPrice = parseInt(pizzaClicked.price, 10) * itemToUpdate.amount
	price.innerText = newPrice + ',00'
	setAmountAndTotal();
}

function setAmountAndTotal() {
	let totalAmount = 0;
	let totalPizzaPrice = 0;
	if (getStorageCartItems !== null) {
		getStorageCartItems.forEach(item => { totalAmount += item.amount });
		getStorageCartItems.forEach(item => {
			const currentPizza = pizzas.find(pizza => pizza.id === item.pizzaId)
			totalPizzaPrice += parseInt(currentPizza.price, 10) * item.amount
		})
	};
	const totalAmountHtml = document.querySelector('.total-amount')
	totalAmountHtml.innerHTML = totalAmount
	const totalPrice = document.querySelector('.total-price')
	totalPrice.innerHTML = totalPizzaPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
setAmountAndTotal();

const finishButton = document.querySelector('.finish-order-button')
finishButton.addEventListener('click', createNewOrder)
function createNewOrder() {
	if (getStorageCartItems !== null) {
		let order = [];
		getStorageCartItems.forEach(item => { order.push({ pizzaId: item.pizzaId, pizzaAmount: item.amount }) })
		let amount = 0;
		getStorageCartItems.forEach(item => { amount += item.amount });
		let price = 0;
		getStorageCartItems.forEach(item => {
			const currentPizza = pizzas.find(pizza => pizza.id === item.pizzaId)
			price += parseInt(currentPizza.price, 10) * item.amount
		})
		let newOrder = new Order(order, amount, price)
		ordersHelper(newOrder);
		const successBar = document.getElementById('successful-order')
		successBar.classList.remove('hidden')
		setTimeout(function () {
			successBar.classList.add('hidden')
		}, 1700)
		removeAllCartItems();
	}
}