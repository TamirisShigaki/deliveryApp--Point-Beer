const registerService = require('../services/registerService');

const registerController = {
  register: async (req, res) => {
    await registerService.create(req.body);

    res.status(201).json({ message: 'User created' });
  },
};

module.exports = registerController;