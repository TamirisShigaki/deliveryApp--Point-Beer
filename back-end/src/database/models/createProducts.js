const createProducts = (sequelize, DataTypes) => {
  const Sales = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING
  }, {
    tableName: 'products',
    timestamps: false,
  });

  // Sales.associate = (db) => {
  //   Sales.belongsTo(db.User, { as: 'user', foreignKey: 'user_id' });
  // }

  // Sales.associate = (db) => {
  //   Sales.belongsTo(db.User, { as: 'seller', foreignKey: 'seller_id' });
  // }

  return Sales;
};

module.exports = createProducts;