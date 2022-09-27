const Sequelize = require('sequelize');
const db = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const date = new Date().toISOString();

const saleService = {
  addSale: async (sale) => {
    const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = sale;
    let sales = {};
    const result = await sequelize.transaction(async (t) => {
      sales = await db.sales.create({
        userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate: date,
        status: 'Pendente',
      }, { transaction: t });
      const salesProducts = products
        .map((product) => ({ saleId: sales.id, productId: product.id, quantity: product.qtd }));
      await db.salesProducts.bulkCreate(salesProducts, { transaction: t });
    });
    console.log(result);
    return sales.id;
  },

  getSalesProducts: async () => {
    const sales = await db.sales.findAll({
      include: [
        { model: db.users, as: 'user', attributes: { exclude: 'password' } },
        { model: db.users, as: 'seller', attributes: { exclude: 'password' } },
      ],
    });

    return sales;
  },
};

module.exports = saleService;