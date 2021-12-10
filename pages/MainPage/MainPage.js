import Carousel from "../../assets/components/Carousel/carousel.js";
import pizzas from "../../utils/pizzas.js";
import footer from "../../assets/components/Footer/footer.js";

const pizzaSale = pizzas.filter(pizza => pizza.is_sale === true)

const div = document.querySelector('.on-sale-carousel')
Carousel(pizzaSale, div);

const footerShow = document.querySelector("#footer")
footer(footerShow);
