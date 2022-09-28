const md5 = require('md5');
const db = require('../database/models');

const userService = {

  getUser: async (email) => {
    const user = await db.users.findOne({
      where: { email },
      attributes: { exclude: 'password' },
    });
    if (!user) {
      const err = new Error('User not found');
      err.name = 'NotFoundError';
      throw err;
    }

    return user;
  },

  getAllSellers: async () => {
    const users = await db.users.findAll({
      where: { role: 'seller' },
      attributes: { exclude: 'password' },
    });
    return users;
  },

  getUsers: async () => {
    const users = await db.users.findAll({
      where: { role: ['seller', 'customer'] },
      attributes: { exclude: 'password' },
    });
    if (!users) {
      const err = new Error('users not found');
      err.name = 'NotFoundError';
      throw err;
    } 

    return users;
  },

  addUser: async ({ username, email, password, role }) => {
    const emailExist = await db.users.findOne({ where: { email } });
    const userExist = await db.users.findOne({ where: { name: username } });
    
    if (emailExist || userExist) {
      const err = new Error('User already registered');
      err.name = 'ConflictError';
      throw err;
    }
    const newPassword = md5(password);

    const user = await db.users.create({ name: username, email, password: newPassword, role });
    if (!user) {
      const err = new Error('Invalid fields');
      err.name = 'UnauthorizedError';
      throw err;
    }

    return user;
  },

  deleteUserById: async (email) => {
    const user = await db.users.findOne({
      where: { email },
    });
    if (!user) {
      const err = new Error('User not found');
      err.name = 'NotFoundError';
      throw err;
    }

    await db.users.destroy({
      where: { id: user.id },
    });
  },
};

module.exports = userService;