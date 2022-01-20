import generateId from "../utils/generateId.util.js";

class Order {
  constructor(order, totalAmount,totalPrice) {
    this.id = "A" + generateId();
    this.orderDescription = order;
    this.totalAmount = totalAmount;
    this.totalPrice = totalPrice;
    this.status = 'Working';
  }
};
export default Order; 