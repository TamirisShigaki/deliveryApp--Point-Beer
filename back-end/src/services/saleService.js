const db = require('../database/models');

// const schemaSale = Joi.object({
//   user_id: Joi.string().required(),
//   seller_id: Joi.string().required(),
//   total_price: Joi.number().required(),
//   delivery_address: Joi.string().required(),
//   delivery_number: Joi.string().required(),
//   sale_date: Joi.date().required(),
//   status: Joi.string().required(),
// });

const saleService = {
  addSale: async (sale) => {
    // const { error } = schemaSale.validate(sale);
    // if (error) throw error;

    const { user_id, seller_id, total_price, delivery_address, delivery_number, sale_date, status } = sale;
    
    const sale = await db.sales.create({ user_id, seller_id, total_price, delivery_address, delivery_number, sale_date, status }); 
    return sale;
  },

  getSalesProducts: async () => {
    const sales = await db.salesProducts.findAll({
      include: [
        { model: db.sales, as: 'sales', through: { attributes: [] } },
        { model: db.salesProducts, as: 'products', through: { attributes: [] } }
      ],
    });
  }
};

module.exports = saleService;