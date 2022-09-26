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
    User.hasMany(db.sales, { as: 'user', foreignKey: 'userId' }),
    User.hasMany(db.sales, { as: 'seller', foreignKey: 'sellerId' })
  }

  return User;
};