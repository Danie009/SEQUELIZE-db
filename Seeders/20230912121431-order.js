'use strict';
const { Product, Client, Order } = require('../models/index')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = await Product.findAll();
    const clients = await Client.findAll();
    const orders= [];
    for(const product of products){
      for(const client of clients){
        orders.push(...[
          { dateOfOrder: new Date(), Quantity: 5, ProductId: product.id, ClientId: client.id },
          { dateOfOrder: new Date(), Quantity: 3, ProductId: product.id, ClientId: client.id },
          { dateOfOrder: new Date(), Quantity: 5, ProductId: product.id, ClientId: client.id },
          { dateOfOrder: new Date(), Quantity: 3, ProductId: product.id, ClientId: client.id },
        ])
      }
    }
   
    await Order.bulkCreate(orders);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
};
