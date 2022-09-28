const saleService = require('../services/saleService');
// const { schemas, validateSchema } = require('../services/validations');

const saleController = {
  addSale: async (req, res) => {
    // validateSchema(schemas.sale, req.body);
    const sale = await saleService.addSale(req.body);

    return res.status(201).json(sale);
  },

  getSales: async (_req, res) => {
    const sales = await saleService.getSales();

    return res.status(200).json(sales);
  },

  getSaleById: async (req, res) => {
    const { id } = req.params;
    const sales = await saleService.getSaleById(id);

    return res.status(200).json(sales);
  },
};

module.exports = saleController;