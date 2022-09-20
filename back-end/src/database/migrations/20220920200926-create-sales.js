'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      totalPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deliveryNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      saleDate: Sequelize.DATETIME,
      status: Sequelize.STRING,
    }, {underscored: true});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
