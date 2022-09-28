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
      attributes: { exclude: 'password' },
    });
    if (!users) {
      const err = new Error('users not found');
      err.name = 'NotFoundError';
      throw err;
    } 

    return users;
  },

  addUser: async ({ username, email, newPassword, role }) => {
    const user = await db.users.create({ name: username, email, password: newPassword, role });
    if (!user) {
      const err = new Error('Invalid fields');
      err.name = 'UnauthorizedError';
      throw err;
    }

    return user;
  },

  deleteUserById: async (id) => {
    const user = await db.users.findOne(id);
    if (!user) {
      const err = new Error('User not found');
      err.name = 'NotFoundError';
      throw err;
    }

    return await db.users.destroy(id);
  },
};

module.exports = userService;