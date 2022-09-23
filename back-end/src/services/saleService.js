const db = require('../database/models');

const saleService = {

  getSales: async () => {
    const products = await db.products.findAll();
    if (!products) {
      const err = new Error('products not found');
      err.name = 'NotFoundError';
      throw err;
    }
    return products;
  },
};

module.exports = saleService;