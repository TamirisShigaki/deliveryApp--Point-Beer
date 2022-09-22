const md5 = require('md5');
const jwtService = require('./jwtService');
const db = require('../database/models');

const authService = {

  login: async (email, password) => {
    const user = await db.users.findOne({
      where: { email },
    });
    if (!user) {
      const err = new Error('User not found');
      err.name = 'NotFoundError';
      throw err;
    }

    const checkPassword = md5(password) === user.password;
    if (!checkPassword) {
      const err = new Error('Invalid fields');
      err.name = 'UnauthorizedError';
      throw err;
    }

    const token = jwtService.createToken({ email: user.email, id: user.id });
    return token;
  },

  // authorization: (token, authorizedUser) => {
  //   const currentUser = jwtService.validateToken(token);
  //   if (currentUser !== authorizedUser) {
  //     const err = new Error('Unauthorized user');
  //     err.name = 'UnauthorizedUser';
  //     throw err;
  //   }
  // },
};

module.exports = authService;