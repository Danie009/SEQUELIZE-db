const { Product, Client, Order } = require('./models'); 

//** Function to fetch all products
async function getAllProducts() {
  return await Product.findAll();
}

//**  Function to fetch all clients
async function getAllClients() {
  return await Client.findAll();
}

//**  Function to fetch orders by a specific client
async function getOrdersByClient(clientId) {
  return await Order.findAll({
    where: { ClientId: clientId },
  });
}

async function getOrdersByProduct(productId) {
    return await Order.findAll({
      where: { ProductId: productId },
    });
  }

module.exports = {
  getAllProducts,
  getAllClients,
  getOrdersByClient,
  getOrdersByProduct
};
