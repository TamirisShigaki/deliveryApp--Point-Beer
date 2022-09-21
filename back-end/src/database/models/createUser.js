module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
  });

  User.associate = (db) => {
    User.hasMany(db.sales, { as: 'users_sales', foreignKey: 'user_id' }),
    User.hasMany(db.sales, { as: 'seller_sales', foreignKey: 'seller_id' })
  }

  return User;
};