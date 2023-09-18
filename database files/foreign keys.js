module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('TableB', 'tableAId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TableA', // The name of the referenced table
          key: 'id', // The name of the referenced column
        },
        onUpdate: 'CASCADE', // Define the update rule if needed
        onDelete: 'CASCADE', // Define the delete rule if needed
      });
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('TableB', 'tableAId');
    },
  };
  