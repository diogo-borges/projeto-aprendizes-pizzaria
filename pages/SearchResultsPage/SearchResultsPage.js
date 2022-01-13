import footer from "../../assets/components/Footer/footer.js";
import pizzas from "../../utils/pizzas.js";
import pizzaCards from "../../assets/components/PizzaCards/cards.js";
import getIdAndAmount from "../../utils/getIdAndAmount.util.js";

const footerShowResult = document.querySelector("#footer-search-result")
footer(footerShowResult);

const myUrl = new URL(window.location.href)
const filterParam = myUrl.searchParams.get("search")

const pizzaFilter = pizzas.filter(pizza => {
    return pizza.name.toLowerCase().match(filterParam.toLowerCase())
});

const pizzaComponentResults = document.querySelector('.card-result')
const notFoundText = document.querySelector('.not-found-pizza')
const foundText = document.querySelector('.found-pizza')

if(pizzaFilter == 0){
    const randomPizzaId = Math.floor(Math.random()*15)
    notFoundText.classList.remove('hidden')
    foundText.classList.add('hidden')
    const randomPizza = pizzas.filter(pizza => pizza.id === randomPizzaId)
    pizzaCards(randomPizza, pizzaComponentResults, getIdAndAmount)
} else{
pizzaCards(pizzaFilter, pizzaComponentResults, getIdAndAmount)
}
