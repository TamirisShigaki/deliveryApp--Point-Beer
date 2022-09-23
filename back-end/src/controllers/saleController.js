const saleService = require('../services/saleService');

const saleController = {
  getsales: async (req, res) => {
    const sales = await saleService.getsales();

    res.status(200).json(sales);
  },
};

module.exports = saleController;