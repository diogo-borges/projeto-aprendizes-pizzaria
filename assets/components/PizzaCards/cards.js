function getPizzaCardsContainer(element) {
  let getPizzasCards = '';
  for (var i = 0; i < element.length; i++) {
    getPizzasCards = `
      ${getPizzasCards}
  <div class="pizzas-card" id=${element[i].id}>
    <section class="container-pizza-photo">
        <div class="pizza-card-description" name="${element[i].description}"></div>
        <img class="pizza-photo" src=${element[i].image} style="width: 100%; height: 100%;">
    </section>
    <section class="container-pizza-controls">
      <p class="pizza-card-title">${element[i].name}</p>
        <section class="pizza-controls">
          <p class="pizza-card-price">${element[i].price}</p>
          <input class='pizza-card-amount' type="number" value="1" min="1">
          <button class='pizza-card-buy'><img src="../../assets/img/shopping-cart-solid.svg"></button>
        </section>
    </section>
  </div>
  `
  }
  return getPizzasCards;
}

function pizzaCards(element, query) {
  query.innerHTML = `${getPizzaCardsContainer(element)}`
}

export default pizzaCards;