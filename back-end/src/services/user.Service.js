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
};

module.exports = userService;