const createSalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
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
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    db.sales.belongsToMany(db.products, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  }

  return SalesProducts;
};

module.exports = createSalesProducts;