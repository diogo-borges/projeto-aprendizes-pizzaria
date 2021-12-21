function getPizzaCardsContainer(pizza, onClick) {
  window.OnBuyInCard = onClick
  let getPizzasCards = '';
  for (var i = 0; i < pizza.length; i++) {
    getPizzasCards = `
      ${getPizzasCards}
  <div class="pizzas-card" id=${pizza[i].id}>
    <section class="container-pizza-photo">
        <div class="pizza-card-description" name="${pizza[i].description}"></div>
        <img class="pizza-photo" src=${pizza[i].image} style="width: 100%; height: 100%;">
    </section>
    <section class="container-pizza-controls">
      <p class="pizza-card-title">${pizza[i].name}</p>
        <section class="pizza-controls">
          <p class="pizza-card-price">${pizza[i].price}</p>
          <input id='pizza-amount-${pizza[i].id}' class='pizza-card-amount' type="number" value="1" min="1">
          <button class='pizza-card-buy' onclick='OnBuyInCard(${pizza[i].id})'><img src="../../assets/img/shopping-cart-solid.svg"></button>
        </section>
    </section>
  </div>
  `
  }
  return getPizzasCards;
}

function pizzaCards(pizza, query,  onClick) {
  query.innerHTML = `${getPizzaCardsContainer(pizza, onClick)}`
}

export default pizzaCards;