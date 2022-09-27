const Sequelize = require('sequelize');
const db = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const saleService = {
  addSale: async (sale) => {
    const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = sale;

    const result = await sequelize.transaction(async (t) => {
      const sales = await db.sales.create({
        userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status: 'pendente',
      }, { transaction: t });

      // const products = await db.products.create({ title, content, userId: id }, { transaction: t });
      const saleId = sales.id;

      const salesProducts = JSON.parse(products)
        .map((product) => ({ saleId, productId: product.id, quantity: product.qtd }));
      console.log(salesProducts);
      await db.salesProducts.bulkCreate(salesProducts, { transaction: t });
      return sales;
    });

    return result;
  },

  create: async (data) => {
    const { id, categoryIds, title, content } = data;

    const result = await sequelize.transaction(async (t) => {
      const post = await db.BlogPost.create({ title, content, userId: id }, { transaction: t });

      const postId = post.id;
      const postCategory = categoryIds.map((item) => ({ categoryId: item, postId }));

      await db.PostCategory.bulkCreate(postCategory, { transaction: t });
      return post;
    });
    return result;
  },

  getSalesProducts: async () => {
    const sales = await db.sales.findAll({
      include: [
        { model: db.users, as: 'user', attributes: { exclude: 'password' } },
        { model: db.users, as: 'seller', attributes: { exclude: 'password' } },
      ],
    });

    return sales;
  },
};

module.exports = saleService;