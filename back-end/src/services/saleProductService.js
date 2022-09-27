const db = require('../database/models');

const salesProductsService = {

  getSalesProductsById: async (id) => {
    const sale = await db.salesProducts.findByPk(id, {
      // include: [
      //   { model: db.products, as: 'products', through: [] },
      //   { model: db.users, as: 'seller', attributes: { exclude: 'password' } },
      // ],
    });
    if (!sale) {
      const err = new Error('sale not found');
      err.name = 'NotFoundError';
      throw err;
    }

    return sale;
  },
};

module.exports = salesProductsService;