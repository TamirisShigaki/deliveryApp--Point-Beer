const Sequelize = require('sequelize');
const db = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const date = new Date().toISOString();

const saleService = {
  addSale: async (sale) => {
    const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = sale;
    let sales = {};
    const result = await sequelize.transaction(async (t) => {
      sales = await db.sales.create({
        userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate: date,
        status: 'Pendente',
      }, { transaction: t });

      const salesProducts = products
        .map((product) => ({ saleId: sales.id, productId: product.id, quantity: product.qtd }));
      await db.salesProducts.bulkCreate(salesProducts, { transaction: t });
    });
    console.log(result);
    return sales.id;
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

  getSales: async () => {
    const sales = await db.sales.findAll({
      include: [
        { model: db.users, as: 'user', attributes: { exclude: 'password' } },
        { model: db.users, as: 'seller', attributes: { exclude: 'password' } },
        // { model: db.salesProducts, as: 'salesProducts', attributes: [] },
      ],
    });

    return sales;
  },

  // eslint-disable-next-line max-lines-per-function
  getSaleById: async (id) => {
    const sale = await db.sales.findOne({
      where: { id },
      include: [
      // { model: db.users, as: 'user', attributes: { exclude: 'password' } },
      { model: db.users, as: 'seller', attributes: { exclude: 'password' } },
      { model: db.products, as: 'products', through: db.salesProducts },
    ] });

    // const saleProducts = await db.salesProducts.findByPk(id, {
    //   // include: db.products,
    //   include: [
    //   { model: db.products, as: 'products', attributes: [] },
    //   ],
    // });
    console.log(sale);
    // console.log(saleProducts);
    if (!sale) {
      const e = new Error('Sale does note exist');
      e.name = 'NotFoundError';
      throw e;
    }

    // const newObj = { sale, saleProducts };
    return sale;
  },
};

module.exports = saleService;