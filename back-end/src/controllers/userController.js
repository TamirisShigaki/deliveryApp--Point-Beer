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

  getUsers: async (_req, res) => {
    const users = await userService.getUsers();

    return res.status(200).json(users);
  },

  addUser: async (req, res) => {
    const { username, email, newPassword, role } = req.body;
    const user = await userService.addUser({ username, email, newPassword, role });

    return res.status(201).json(user);
  },

  deleteUserById: async (req, res) => {
    const { id } = req.params;
    await userService.deleteUserById(id);
    
    return res.status(204).end();
  },

};

module.exports = userController;