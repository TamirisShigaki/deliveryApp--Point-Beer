const salesProductsService = require('../services/saleProductService');

const saleProductController = {
  getById: async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const sale = await salesProductsService.getSalesProductsById(id);

    res.status(201).json(sale);
  },
};

module.exports = saleProductController;