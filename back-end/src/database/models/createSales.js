const createSales = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    seller_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    tableName: 'sales',
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

module.exports = createSales;