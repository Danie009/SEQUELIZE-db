'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('clients', [
      { name: 'Client 1', Email: 'client1@yopmail.com', Telephone: '+256-456-7890' },
      { name: 'Client 2', Email: 'client2@yopmail.com', Telephone: '+256-654-3210' },
      // Add more client data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('clients', null, {});
  },
};
