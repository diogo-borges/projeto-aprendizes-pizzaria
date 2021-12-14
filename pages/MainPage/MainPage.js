import Carousel from "../../assets/components/Carousel/carousel.js";
import pizzas from "../../utils/pizzas.js";
import footer from "../../assets/components/Footer/footer.js";
import pizzaCards from "../../assets/components/PizzaCards/cards.js";

// On sale carousel
const pizzaSale = pizzas.filter(pizza => pizza.is_sale === true)
const div = document.querySelector('.on-sale-carousel')
Carousel(pizzaSale, div);

// Footer
const footerShow = document.querySelector("#footer")
footer(footerShow);

// Pizza Cards
    // Dev Júnior
    const pizzaDevjr = pizzas.filter(pizza => pizza.category === "Dev Júnior" && pizza.is_sale === false)
    const pizzaComponentJUNIOR = document.querySelector("#dev-junior-card")
    pizzaCards(pizzaDevjr, pizzaComponentJUNIOR);

    // Dev Pleno
    const pizzaDevPleno = pizzas.filter(pizza => pizza.category === "Dev Pleno")
    const pizzaComponentPLENO = document.querySelector("#dev-pleno-card")
    pizzaCards(pizzaDevPleno, pizzaComponentPLENO);

    // Dev Senior
    const pizzaDevSenior = pizzas.filter(pizza => pizza.category === "Dev Sênior")
    const pizzaComponentSENIOR = document.querySelector("#dev-senior-card")
    pizzaCards(pizzaDevSenior, pizzaComponentSENIOR);

    // Dev Specialist
    const pizzaDevSpecialist = pizzas.filter(pizza => pizza.category === "Especialista")
    const pizzaComponentSPECIALIST = document.querySelector("#specialist-card")
    pizzaCards(pizzaDevSpecialist, pizzaComponentSPECIALIST);
