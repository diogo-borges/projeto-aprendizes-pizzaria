function ordersStorageHelper(orderModel){
  let storageOrders = JSON.parse(localStorage.getItem('orders'));
  if (!storageOrders) storageOrders = [];
  storageOrders.push(orderModel);
  localStorage.setItem('orders', JSON.stringify(storageOrders));
}

export default ordersStorageHelper;