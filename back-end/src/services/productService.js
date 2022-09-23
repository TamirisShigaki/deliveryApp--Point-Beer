const db = require('../database/models');

const productService = {

  getProducts: async () => {
    const products = await db.products.findAll();
    if (!products) {
      const err = new Error('products not found');
      err.name = 'NotFoundError';
      throw err;
    }
<<<<<<< HEAD
  }  
=======
    return products;
  },
>>>>>>> d6e21aa308801e970ade7825d72ba6ced496fb0e
};

module.exports = productService;