const userService = require('../services/user.Service');

const userController = {
  getUser: async (req, res) => {
    const { email } = req.body;
    const user = await userService.getUser(email);

    return res.status(200).json(user);
  },

  getAllSellers: async (req, res) => {
    const users = await userService.getAllSellers();

    return res.status(200).json(users);
  },
};

module.exports = userController;