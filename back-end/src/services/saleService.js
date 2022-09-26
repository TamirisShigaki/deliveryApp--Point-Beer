const db = require('../database/models');

const saleService = {
  addSale: async (sale) => {
    const { user_id, seller_id, total_price, delivery_address, delivery_number, sale_date, status } = sale;
    
    const sales = await db.sales.create({ user_id, seller_id, total_price, delivery_address, delivery_number, sale_date, status }); 
    return sales;
  },

  getSalesProducts: async () => {
    const sales = await db.sales.findAll({
      include: [
        { model: db.products, as: 'products', through: { attributes: [] } }
      ],
    });
  }
};

module.exports = saleService;