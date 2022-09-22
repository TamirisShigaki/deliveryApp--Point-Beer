const productService = require('../services/productService');

const productController = {
  getProducts: async (req, res) => {
    const products = await productService.getProducts();

    res.status(200).json(products);
  },
};

module.exports = productController;