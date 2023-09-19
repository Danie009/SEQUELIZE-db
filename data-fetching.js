const { Product, Client, Order } = require('./models'); 
const client = require('./models/client');

//** Function to fetch all products
async function getAllProducts() {
  return await Product.findAll();
}

//**  Function to fetch all clients
async function getAllClients() {
  return await Client.findAll();
}

//**  Function to fetch all clients
async function getAllOrders() {
  return await Order.findAll({
    raw: false,
    include: [
      {
        model: Client,
        required: true,
        where: {
          Email: 'client1@yopmail.com',
        },
        as: 'client',
      },
    ],
  });
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
  getOrdersByProduct,
  getAllOrders
};
