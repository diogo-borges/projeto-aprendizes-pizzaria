import footer from "../../assets/components/Footer/footer.js";
import orderCollapse from "../../assets/components/OrderCollapse/OrderCollapse.js";

const footerOrdersPage = document.querySelector("#footer-orders-page")
footer(footerOrdersPage);

const noOrdersMessage = document.querySelector('.no-orders-message')
const ordersCollapseDiv = document.querySelector('.div-my-orders')
const getStorageOrders = JSON.parse(localStorage.getItem('orders'))

if (getStorageOrders !== null) {
  noOrdersMessage.classList.add('hidden')
  orderCollapse(ordersCollapseDiv, getStorageOrders)
}