import Carousel from "../../assets/components/Carousel/carousel.js";
import pizzas from "../../utils/pizzas.js";

console.log(pizzas)

const pizzaSale = pizzas.filter(pizza => pizza.is_sale === true)
const div = document.querySelector('.on-sale-carousel')
Carousel(pizzaSale, div);
