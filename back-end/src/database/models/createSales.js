const createSales = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: {
      type: DataTypes.DATE,
    },
    status: DataTypes.STRING
  }, {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });

  Sales.associate = (db) => {
    Sales.belongsTo(db.users, { as: 'user', foreignKey: 'userId' });
    Sales.belongsTo(db.users, { as: 'seller', foreignKey: 'sellerId' });
  }

  return Sales;
};

module.exports = createSales;