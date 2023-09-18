'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      { name: 'Product 1', price: 10.99, make: 'Brand A', color: 'Red', Quantity: 100, image: 'product1.jpg' },
      { name: 'Product 2', price: 19.99, make: 'Brand B', color: 'Blue', Quantity: 50, image: 'product2.jpg' },
      // Add more product data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};
