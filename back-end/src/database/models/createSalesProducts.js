const createSalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'sales_products',
    timestamps: false,
    underscored: true,
  });

  SalesProducts.associate = (db) => {
    db.products.belongsToMany(db.sales, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    db.sales.belongsToMany(db.products, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  }

  return SalesProducts;
};

module.exports = createSalesProducts;