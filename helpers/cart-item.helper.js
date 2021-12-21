const cartItemsHelper = function () {
  let storageCartItems = JSON.parse(localStorage.getItem('cart-items'));
  if (!storageCartItems) storageCartItems = [];

  return {
    createItem: function (cartItem) {
      try {
        const findPizzaId = this.findById(cartItem.pizzaId);
        cartItem.amount = parseInt(cartItem.amount, 10)
        findPizzaId ? findPizzaId.amount = cartItem.amount + parseInt(findPizzaId.amount, 10) : storageCartItems.push(cartItem);
        localStorage.setItem('cart-items', JSON.stringify(storageCartItems));
      } catch (error) {
        console.log(error);
      }
    },
    findById: function (id) {
      return storageCartItems.find(pizza => pizza.pizzaId === id);
    }
  }
}

export default cartItemsHelper;