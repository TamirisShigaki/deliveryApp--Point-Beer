const jwtService = require('./jwtService');
const db = require('../database/models');

const authService = {

  login: async (email, password) => {
    const user = await db.users.findOne({
      where: { email },
    });

    console.log(user);

    if (!user || password !== user.dataValues.password) {
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