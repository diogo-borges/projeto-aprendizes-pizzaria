import cartItem from "../../models/cartItem.model.js";
import cartItemsHelper from "../../helpers/cart-item.helper.js"

function getIdAndAmount(id) {
    const pizzaAmount = document.querySelector(`#pizza-amount-${id}`)
    const cartitem = new cartItem(id, pizzaAmount.value)
    cartItemsHelper().createItem(cartitem);
}

export default getIdAndAmount;