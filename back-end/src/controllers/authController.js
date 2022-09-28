const authService = require('../services/authService');
const { schemas, validateSchema } = require('../services/validations');

const authController = {
  login: async (req, res) => {
    const { email, password } = validateSchema(schemas.login, req.body);
    // const { email, password } = req.body;
    const token = await authService.login(email, password);

    res.status(200).json({ token });
  },
};

module.exports = authController;