const userService = require('../services/user.Service');

const userController = {
  getUser: async (req, res) => {
    const { email } = req.body;
    const user = await userService.getUser(email);

    return res.status(200).json(user);
  },
};

module.exports = userController;