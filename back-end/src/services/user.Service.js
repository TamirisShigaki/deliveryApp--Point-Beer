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
};

module.exports = userService;