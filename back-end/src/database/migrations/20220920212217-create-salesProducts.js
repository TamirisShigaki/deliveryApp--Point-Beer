'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('saleProducts', {
      sale_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'products',
          key: 'id',
        },
      },
      quantity: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
    }, {underscored: true});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('saleProducts');
  }
};
