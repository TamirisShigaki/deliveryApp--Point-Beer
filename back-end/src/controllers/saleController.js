const saleService = require('../services/saleService');
const { schemas, validateSchema } = require('../services/validations');

const saleController = {
  addSale: async (req, res) => {
    validateSchema(schemas.sale, req.body);
    const sale = await saleService.addSale(req.body);

    return res.status(201).json(sale);
  },

  getSalesProducts: async (_req, res) => {
    const sales = await saleService.getSalesProducts();

    return res.status(200).json(sales);
  }
};

module.exports = saleController;