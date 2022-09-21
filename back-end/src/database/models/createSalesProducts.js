const createSalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProducts', {
    sale_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'salesProducts',
    timestamps: false,
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