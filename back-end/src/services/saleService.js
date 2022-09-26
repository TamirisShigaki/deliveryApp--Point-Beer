const db = require('../database/models');

const saleService = {
  addSale: async (sale) => {
    const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = sale;
    const sales = await db.sales.create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status: 'pendente' }); 
    return sales;
  },

  getSalesProducts: async () => {
    const sales = await db.sales.findAll({
      include: [
        { model: db.users, as: 'user', attributes: { exclude: 'password' } },
        { model: db.users, as: 'seller', attributes: { exclude: 'password' } },
      ] 
    });

    return sales;
  }
};

module.exports = saleService;