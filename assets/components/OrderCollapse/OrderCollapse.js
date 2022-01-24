import pizzas from "../../../utils/pizzas.js"
import Order from "../../../models/order.model.js";
import ordersHelper from "../../../helpers/orders.helper.js";

function orderCollapse(query, orderList) {
  window.description = orderDescription;
  window.orderStatus = setStatus;
  window.cancel = cancelOrder;
  window.finish = finishOrder;
  window.repeatOrder = orderAgainModal;
  window.closeModal = closeModal;
  window.newOrder = createNewOrder;

  for (let i = 0; i < orderList.length; i++) {
    query.innerHTML = `
  <details id='order-collapse-${orderList[i].id}' class="order-collapse">
      <summary class="order-title">
        <p class="order-identification">Pedido: ${orderList[i].id}</p>
        <p class='order-status'>${orderStatus(orderList[i].status)}</p>
      </summary>
        <div class="order-description">
        ${description(orderList[i].orderDescription)}
        <div class="order-informations">
          <div class="order-price-and-amount">
            <p class="order-total-amount">Quantidade: ${orderList[i].totalAmount}</p>
            <p class="order-total-price">Total: R$${orderList[i].totalPrice},00</p>
          </div>
          <div id='order-tools-${orderList[i].id}' class="order-tools">
            <button class="cancel-order ${orderList[i].status === 'Canceled' || orderList[i].status === 'Finished' ? 'hide' : ''}" onclick='cancel(${JSON.stringify(orderList[i].id)})'>Cancelar pedido</button>
            <button class="order-delivered ${orderList[i].status === 'Canceled' || orderList[i].status === 'Finished' ? 'hide' : ''}"  onclick='finish(${JSON.stringify(orderList[i].id)})'>Pedido entregue</button>
            <button class= 'order-again ${orderList[i].status === 'Canceled' || orderList[i].status === 'Finished' ? '' : ' hide'}' onclick='repeatOrder(${JSON.stringify(orderList[i].id)})'>Pedir Novamente</button> 
          </div>
        </div>
      </div>
    </details>
  ${query.innerHTML}

  <div id="modal-${orderList[i].id}" class="repeat-order-modal">
  <div class="modal-content">
    <div class='modal-title'>
    <p>Você gostaria de repetir esse pedido?</p>
    <span class="close-modal" onclick='closeModal(${JSON.stringify(orderList[i].id)})'>&times;</span>
    </div>
    <div class='repeat-order-description'>
    ${description(orderList[i].orderDescription)}
    <div class="repeat-order-informations">
    <div class="order-price-and-amount">
    <p class="order-total-amount">Quantidade: ${orderList[i].totalAmount}</p>
    <p class="order-total-price">Total: R$${orderList[i].totalPrice},00</p>
    </div>
    <div class='finish-order'>
    <button class='order-again' onclick='newOrder(${JSON.stringify(orderList[i].id)})'>Sim, gostaria</button> 
    </div>
    </div>
  </div>
</div>`
  }
}

function setStatus(orderStatus) {
  let status = ''
  if (orderStatus === 'Working') { status = 'Status: Em preparação' }
  if (orderStatus === 'Canceled') { status = 'Status: Cancelado' }
  if (orderStatus === 'Finished') { status = 'Status: Finalizado' }
  return status;
}

function orderDescription(orderDescriptionList) {
  let orderDescription = '';
  for (let i = 0; i < orderDescriptionList.length; i++) {
    const pizzaName = pizzas.find(pizza => pizza.id === orderDescriptionList[i].pizzaId)
    orderDescription += `
    <section class="order">
      <p class="pizza-order-amount">${orderDescriptionList[i].pizzaAmount}</p>
      <p class="pizza-order-name">${pizzaName.name}</p>
    </section>`
  }
  return orderDescription;
}

const storaegeOrders = JSON.parse(localStorage.getItem('orders'))

function cancelOrder(orderToCancelId) {
  const orderToCancel = storaegeOrders.find(order => order.id === orderToCancelId)
  orderToCancel.status = 'Canceled'
  localStorage.setItem('orders', JSON.stringify(storaegeOrders))
  location.reload()
}

function finishOrder(orderToFinishId) {
  const orderToCancel = storaegeOrders.find(order => order.id === orderToFinishId)
  orderToCancel.status = 'Finished'
  localStorage.setItem('orders', JSON.stringify(storaegeOrders))
  location.reload()
}

function orderAgainModal(orderToRepeatId) {
  const modal = document.querySelector(`#modal-${orderToRepeatId}`)
  modal.style.display = 'block'
}

function closeModal(modalToCloseId) {
  const modal = document.querySelector(`#modal-${modalToCloseId}`)
  modal.style.display = 'none'
}

function createNewOrder(orderToRepeatId) {
  const orderToRepeat = storaegeOrders.find(order => order.id === orderToRepeatId)
  const order = new Order(orderToRepeat.orderDescription, orderToRepeat.totalPrice, orderToRepeat.totalAmount)
  ordersHelper(order)
  location.reload();
}

export default orderCollapse;